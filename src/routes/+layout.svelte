


<script>
  import { base } from '$app/paths'
  import "tailwindcss/tailwind.css";
  import '../app.postcss'

</script>




<h1 class="ml-8 mt-8 text-xl"> <a href={base +"/projekte"}> Jonas Olbrich </a></h1>


<div class="navbar lg:h-28 bg-primary place-content-end  ~mt-2/8  drop-shadow-md relative z-10 ~xs:~space-x-0/24  ~xs:~pr-0/24 ">

    <a class="btn btn-ghost lg:btn-lg lg:text-4xl" href={base +"/aboutme"}>About me</a>

    <div class="dropdown dropdown-hover relative">

        <div tabindex="0" role="button" class="btn lg:btn-lg btn-ghost lg:text-4xl "><a href={base + "/projekte"}>Projekte</a></div>

        <ul class="dropdown-content z-[1] menu p-2 shadow bg-neutral rounded-box w-80 text-2xl">
          <li><a href={base + "/projekte/playingemissions"} >Playing Emissions</a></li>
          <li><a href={base +"/projekte/cloudfactory"}>Cloudfactory</a></li>
          <li><a href={base +"/projekte/jeffersonsarcadia"}>Jeffersons Arcadia</a></li>
          <li><a href={base +"/projekte/magicshell"}>Magic Shell</a></li>
          <li><a href={base +"/projekte/cubemaze"}>Cube Maze</a></li>
          <li><a href={base +"/projekte/modemaker"}>Mode Maker</a></li>
          <li><a href={base +"null"}>Something Else</a></li>


        </ul>
      </div>

    <a class="btn lg:btn-lg btn-ghost lg:text-4xl" href={base +"/impressum"}>Imprint</a>
  </div>
  

<slot />

<footer class="footer p-10 bg-secondary text-neutral-content mb-4">

</footer>
