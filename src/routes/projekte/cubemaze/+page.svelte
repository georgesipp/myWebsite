<script>
	import image1 from '$lib/components/cubemaze/cube_maze_1.jpg';
	import image2 from '$lib/components/cubemaze/cube_maze_2.jpg';

	
</script>

<div class="grid h-full lg:grid-cols-2 ~xs:~gap-2/8 rounded-lg ~xs:~p-2/12 z-[-10]">
	<!-- <video class="w-full rounded-lg col-span-1 justify-end self-end" autoplay muted controls>
		<source src={video1} type="video/mp4" />
		Your browser does not support the video tag.
	</video> -->
	<div class=" bg-accent rounded-lg ~xs:~px-2/4 drop-shadow-2xl">
		<h1 class="content-center px-8 mt-8 text-4xl font-bold">Cubey’s Maze at FFT</h1>
		<div class="~xs:~px-2/4 mt-8 ~xs:~text-xs/2xl text-pretty text-justify">
			<p class="mb-4 font-bold">Premiere 19.11.2023, FFT Düsseldorf </p>
			<p class="mb-4 ">
				Das Spiel „Cubey’s Maze“ entstand innerhalb einer zweiwöchigen Residenz im
				FFT Düsseldorf im Rahmen des Projektes Digitales Foyer. Cubey muss durch ein Labyrinth navigiert werden, dafür müssen zunächst jedoch die richtigen Schlüssel gefunden werden.
				Als Controller und Konsole dienen die FFT Cubes. Ein FFT Cube ist ein 60×60×60cm großer Holzwürfel. Die Oberseite besteht aus einem Display, im Inneren befinden sich Sensoren, die Position und Drehung des Würfels registrieren. 
				Durch das Schieben und Drehen des Würfels kommt Cubey an sein Ziel.
			</p>
			<p class="mb-4 ">
			eine Game-Intervention von Leonie Kopineck, Jonas Olbrich, Jeffrey van der Geest, Veronika Risniovska
			</p>
		</div>
	</div>

	<img class="object-contain max-auto rounded-lg" alt="Cube Maze 1" src={image1} />
	<img class="object-contain max-auto rounded-lg" alt="Cube Maze 2" src={image2} />
</div>
