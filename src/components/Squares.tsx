import type React from "react";
import { useEffect, useRef } from "react";

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

interface GridOffset {
	x: number;
	y: number;
}

interface SquaresProps {
	direction?: "diagonal" | "up" | "right" | "down" | "left";
	speed?: number;
	squareSize?: number;
	hoverFillColor?: CanvasStrokeStyle;
}

const resolveVar = (name: string, fallback: string) => {
	if (typeof document === "undefined") return fallback;
	return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
};

const Squares: React.FC<SquaresProps> = ({
	direction = "right",
	speed = 1,
	squareSize = 40,
	hoverFillColor = "#222",
}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const requestRef = useRef<number | null>(null);
	const numSquaresX = useRef<number>(0);
	const numSquaresY = useRef<number>(0);
	const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
	const hoveredSquareRef = useRef<GridOffset | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");

		const resizeCanvas = () => {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
			numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
			numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
		};

		window.addEventListener("resize", resizeCanvas);
		resizeCanvas();

		const drawGrid = () => {
			if (!ctx) return;

			const border = resolveVar("--grid-border", "rgba(100,105,125,0.6)");
			const bg = resolveVar("--grid-bg", "#f9fafb");

			ctx.fillStyle = bg;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
			const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

			for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
				for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
					const squareX = x - (gridOffset.current.x % squareSize);
					const squareY = y - (gridOffset.current.y % squareSize);

					if (
						hoveredSquareRef.current &&
						Math.floor((x - startX) / squareSize) === hoveredSquareRef.current.x &&
						Math.floor((y - startY) / squareSize) === hoveredSquareRef.current.y
					) {
						ctx.fillStyle = hoverFillColor;
						ctx.fillRect(squareX, squareY, squareSize, squareSize);
					}

					ctx.strokeStyle = border;
					ctx.strokeRect(squareX, squareY, squareSize, squareSize);
				}
			}

			const gradient = ctx.createRadialGradient(
				canvas.width / 2,
				canvas.height / 2,
				0,
				canvas.width / 2,
				canvas.height / 2,
				Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2,
			);
			gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
			gradient.addColorStop(1, "#060010");

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		};

		const updateAnimation = () => {
			const effectiveSpeed = Math.max(speed, 0.1);
			switch (direction) {
				case "right":
					gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
					break;
				case "left":
					gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
					break;
				case "up":
					gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
					break;
				case "down":
					gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
					break;
				case "diagonal":
					gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
					gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
					break;
				default:
					break;
			}

			drawGrid();
			requestRef.current = requestAnimationFrame(updateAnimation);
		};

		const handleMouseMove = (event: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			const mouseX = event.clientX - rect.left;
			const mouseY = event.clientY - rect.top;

			const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
			const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

			const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize);
			const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize);

			if (
				!hoveredSquareRef.current ||
				hoveredSquareRef.current.x !== hoveredSquareX ||
				hoveredSquareRef.current.y !== hoveredSquareY
			) {
				hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
			}
		};

		const handleMouseLeave = () => {
			hoveredSquareRef.current = null;
		};

		const themeObserver = new MutationObserver(() => {
			if (requestRef.current) {
				cancelAnimationFrame(requestRef.current);
			}
			drawGrid();
			requestRef.current = requestAnimationFrame(updateAnimation);
		});
		themeObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseleave", handleMouseLeave);
		drawGrid();
		requestRef.current = requestAnimationFrame(updateAnimation);

		return () => {
			themeObserver.disconnect();
			window.removeEventListener("resize", resizeCanvas);
			if (requestRef.current) cancelAnimationFrame(requestRef.current);
			canvas.removeEventListener("mousemove", handleMouseMove);
			canvas.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [direction, speed, hoverFillColor, squareSize]);

	return (
		<canvas
			ref={canvasRef}
			className="absolute -top-24 inset-0 w-[100vw] h-[calc(100%+105px)] border-none block"
		></canvas>
	);
};

export default Squares;
