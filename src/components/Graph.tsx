import { useEffect, useRef } from "react";
import { compile } from "mathjs";

type GraphProps = {
  equation: string;
  userEquation: string;
};

function Graph({ equation, userEquation }: GraphProps) {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //#region Graph Lines
        const scale = 40; // pixels per unit

        // Makes up the difference for different canvas dimnesions
        let xdiff = Math.ceil((canvas.width/2)/scale)*scale - (canvas.width/2);
        let ydiff = Math.ceil((canvas.height/2)/scale)*scale - (canvas.height/2);

        // Background
        ctx.fillStyle = "#f8f8f8";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Small grid lines
        ctx.strokeStyle = "#eeeeee";
        ctx.lineWidth = 1;


        for (let i = 0; i <= canvas.width; i += scale / 5) {
            ctx.beginPath();
            // x axis
            ctx.moveTo(i-xdiff, 0);
            ctx.lineTo(i-xdiff, canvas.height);

            //y axis
            ctx.moveTo(0, i-ydiff);
            ctx.lineTo(canvas.width, i-ydiff);
            ctx.strokeStyle = "#d0d0d0";

            ctx.stroke();
        }


        // Big grid lines
        for (let i = 0; i <= canvas.width; i += scale) {

            ctx.beginPath();
            // x axis
            ctx.moveTo(i-xdiff, 0);
            ctx.lineTo(i-xdiff, canvas.height);

            //y axis
            ctx.moveTo(0, i-ydiff);
            ctx.lineTo(canvas.width, i-ydiff);

            ctx.stroke();
            ctx.strokeStyle = "#f7b6e1";
        }

        // Axis

        ctx.strokeStyle = "#444";
        ctx.lineWidth = 2;

        // X axis
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.stroke();

        // Y axis
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();

        // Numbers
        ctx.font = "12px Arial";
        ctx.fillStyle = "black";

        for (let i = Math.floor((-window.innerWidth/scale)/2); i <= (window.innerWidth/scale)/2; i++) {
            if (i === 0) continue;

            // x-axis labels
            const x = canvas.width / 2 + i * scale;
            ctx.fillText(i.toString(), x - 4, canvas.height / 2 + 15);

            // y-axis labels
            const y = canvas.height / 2 - i * scale;
            ctx.fillText(i.toString(), canvas.width / 2 + 6, y + 4);
        }
        //#endregion

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

    if(window.innerWidth <= 575 ){
        return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight*0.6}></canvas>
    }
    return <canvas ref={canvasRef} width={window.innerWidth*0.6} height={window.innerHeight*0.6}></canvas>
}

export default Graph;