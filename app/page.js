import Image from "next/image";
import { Button } from "../components/ui/button";
import Intro from "@/components/ui/Intro";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between mt-40">
			<Intro />

			<div className="w-full px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					<div className="relative bg-blue-500 h-32 w-full rounded-lg flex items-center justify-center text-white overflow-hidden">
						<img
							src="https://via.placeholder.com/150"
							alt="Card 1"
							className="object-cover w-full h-full"
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
							Card 1
						</div>
					</div>
					<div className="relative bg-green-500 h-40 w-full rounded-lg flex items-center justify-center text-white overflow-hidden">
						<img
							src="https://via.placeholder.com/150"
							alt="Card 2"
							className="object-cover w-full h-full"
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
							Card 2
						</div>
					</div>
					<div className="relative bg-red-500 h-48 w-full rounded-lg flex items-center justify-center text-white overflow-hidden">
						<img
							src="https://via.placeholder.com/150"
							alt="Card 3"
							className="object-cover w-full h-full"
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
							Card 3
						</div>
					</div>
					<div className="relative bg-yellow-500 h-36 w-full rounded-lg flex items-center justify-center text-white overflow-hidden">
						<img
							src="https://via.placeholder.com/150"
							alt="Card 4"
							className="object-cover w-full h-full"
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
							Card 4
						</div>
					</div>
					<div className="relative bg-purple-500 h-28 w-full rounded-lg flex items-center justify-center text-white overflow-hidden">
						<img
							src="https://via.placeholder.com/150"
							alt="Card 5"
							className="object-cover w-full h-full"
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
							Card 5
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
