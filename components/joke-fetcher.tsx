'use client';

import { use, useEffect, useState} from "react";
import { Button } from "./ui/button";

export default function JokeFetcher() {
    const [joke, setJoke] = useState("");
    
    const fetchJoke = async () => {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            },
        });
        const data = await response.json();
        setJoke(data.joke);
    }

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className="h-screen flex justify-center items-center gap-6 flex-col px-8 w-full">
            <div className="px-8 w-full text-center">
                <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight text-center mb-4 lg:text-7xl">
                    Generate a Dad Joke 🌽
                </h1>
                <p className="text-xl text-muted-foreground text-center">
                    {joke || 'Loading Joke...'}
                </p>
            </div>
            <div className="flex justify-center gap-8">
                <Button onClick={fetchJoke}>
                    Regenerate
                </Button>
            </div>
        </div>
    );

}