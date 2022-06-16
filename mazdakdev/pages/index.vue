<template>

    <div class="flex flex-col justify-center px-8">
        <nav class="flex items-center justify-between w-full relative max-w-2xl border-gray-700 mx-auto pt-8 pb-8 sm:pb-16   bg-gray-900 bg-opacity-60 text-gray-100">
            <div>
                <a class="text-gray-300  text-base">Home</a>
                <a class="text-gray-300 ml-5 text-base">Blog</a>
                <a class="text-gray-300 ml-5  text-base">Snippets</a>
                <a class="text-gray-300 ml-5  text-base">Projects</a>
                <a class="text-gray-300 ml-5  text-base">CV</a>
            </div>
            
            <div class="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg"  class="social-icon fill-gray-300" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="social-icon ml-5 fill-gray-300 "  viewBox="0 0 496 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </div>
        </nav>
    </div>

    <div class="flex flex-col justify-center items-start max-w-2xl border-gray-700 mx-auto pb-16 ">
        <div class="flex flex-col-reverse sm:flex-row items-start">
            <div class="flex flex-col pr-8">
                    <h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">
                        Mazdak Pakaghideh
                    </h1>
                    <h2 class="text-gray-200 mb-4">
                        Fullstack Web developer
                    </h2>
                    <p class="text-gray-400 mb-16">
                        Web developer , ML , AI , Blockchain  &
                        Penetration tester teenager from Iran
                    </p>
            </div>

            <div class="">
                <img src="~/assets/images/profile.jpeg" class="w-[194px] rounded-full">
            </div>

        </div>

        <h3 class="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-white">
          Featured Posts
        </h3>

        <div class="flex gap-6 flex-col md:flex-row ">
          <div class="post-1 shadow-sm justify-center  flex p-5 ">
              <p class="text-white text-xl ">The Fact that Soraya is no one but Mazdak</p>
          </div>

          <div class="post-2 shadow-sm justify-center  flex p-5">
              <p class="text-white text-xl ">The Fact that Soraya is no one but Mazdak</p>
          </div>

          <div class="post-3 shadow-sm justify-center  flex p-5">
              <p class="text-white text-xl ">The Fact that Soraya is no one but Mazdak</p>
          </div>
     
        </div>

       
          <a class="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all posts

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="h-6 w-6 ml-1"
            >

            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />

            </svg>
          </a>

        <h3 class="font-bold text-2xl md:text-4xl tracking-tight mt-16 text-white">
                About Me
        </h3>
        <p class="text-gray-100 mt-10 ">
            I'm 16 years old teenager developer from Iran who's in love with technology ,
            I started programming when I was 10 with C++.
            Now I mostly focused on Django , Python , Vue.js , Nuxt.js , AI , Ml , & Blockchain
            and of course Git , Docker , Linux and etc.
            Being developer means to have a power of creation for me 
        </p>

        <h3 class="font-bold text-2xl md:text-4xl tracking-tight mt-16 text-white">
            Download CV
        </h3>


      <div class="flex flex-col md:flex-row mt-10 justify-center items-center ">
            <button class="cv ml-32 flex flex-col md:flex-row items-center justify-center">
                <p class="text-gray-100">CV - EN</p>
                <svg  class="fill-gray-100 w-[16px] h-[15px] ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
            </button>

            <button class="cv ml-40 flex flex-col md:flex-row justify-center items-center ">
                <p class="text-gray-100">CV - FA</p>
                <svg  class="fill-gray-100 w-[16px] h-[15px] ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
            </button>
        </div>



        <footer class="mt-40 border-t  border-gray-800 shadow-md">
            <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-3">
                <div class="ml-20">
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Pages</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" class=" hover:underline">Home</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">About</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Projects</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Snippets</a>
                        </li>
                    </ul>
                </div>
                <div class="ml-20">
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Contact Me</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Github</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Linkedin</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Email</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Telegram</a>
                        </li>
                    </ul>
                </div>
                <div class="ml-20">
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Blog</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">CV</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Stack&nbsp;overflow</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Hack the Box</a>
                        </li>
                    </ul>
                </div>
      
            </div>
        
        </footer>
    </div>

</template>