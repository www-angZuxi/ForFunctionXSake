import { useEffect, useRef } from "react";
import { compile } from "mathjs";

type GraphProps = {
  equation: string;
  userEquation: string;
};

export default function Graph({ equation, userEquation }: GraphProps) {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Fixed Equation
        //#region Fixed Stroke
        const expr = compile(equation);

        ctx.strokeStyle = userEquation.toLowerCase().replaceAll("y=", "")==equation?"lightgreen":"red";
        ctx.lineWidth = 2;
        ctx.beginPath();

        for (let px = 0; px < canvas.width; px++) {
            const x = (px - canvas.width / 2) / 40;
            const y = expr.evaluate({ x }) as number;

            const py = canvas.height / 2 - y * 40;

            if (px === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }

        ctx.stroke();
        //#endregion

        // User Equation
        //#region User Stroke
        let userExpr;

        try {
            userExpr = compile(userEquation.toLowerCase());

            ctx.strokeStyle = userEquation.toLowerCase().replaceAll("y=", "")==equation?"lightgreen":"blue";
            ctx.lineWidth = 2;
            ctx.beginPath();

            for (let px = 0; px < canvas.width; px++) {
                const x = (px - canvas.width / 2) / 40;
                const y = userExpr.evaluate({ x }) as number;

                const py = canvas.height / 2 - y * 40;

                if (px === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }

            ctx.stroke();
        } catch (error) {
            return;
        }
        //#endregion

    }, [equation, userEquation]);

    return <div className="d-flex justify-content-center">
    <canvas ref={canvasRef} width={800} height={600} className="border border-dark"></canvas>
    </div>
}