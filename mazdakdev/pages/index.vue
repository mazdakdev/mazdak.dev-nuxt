<template>

    <div className="flex flex-col justify-center px-8">
        <div class="flex  flex-col justify-center md:items-start items-center max-w-2xl border-gray-700 mx-auto pb-16">
            <div class="flex mt-16 flex-col-reverse md:flex-row md:items-start items-center">
                <div class="flex flex-col  md:items-start md:text-start text-center items-center">
                    <h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">
                        Mazdak Pakaghideh
                    </h1>
                    <h2 class="text-gray-200 mb-4">
                        Teenager Web developer 
        
                    </h2>
                    <p class="text-gray-400 mb-16">
                        Web developer , ML , AI , Blockchain  &
                        Penetration tester teenager from Iran
                    </p>
                </div>
                <div class="w-[146px] sm:w-[176px] flex items-center mb-8  ">
                    <img 
                        alt="Mazdak Pakaghideh"
                        height={176}
                        width={176}
                        src="~/assets/images/profile.jpeg"
                        class="rounded-full "
                    />
                </div>
            </div>

        <section class="fadeInLeft">
            <h3 class="font-bold text-3xl md:text-start text-center  md:text-4xl tracking-tight mb-6 text-white">
                Featured Posts
            </h3>

            <div class="flex gap-6 flex-col md:flex-row  ">
            <div class="post-1 md:w-[208px] md:h-[210px] h-40 shadow-sm justify-center  flex p-5 ">
                <p class="text-white text-xl ">The Fact that Soraya is no one but Mazdak</p>
            </div>

            <div class="post-2  shadow-sm md:w-[208px] md:h-[210px] h-40 justify-center  flex p-5">
                <p class="text-white text-xl ">The Fact that Soraya is no one but Mazdak</p>
            </div>

            <div class="post-3 shadow-sm md:w-[208px] md:h-[210px] h-40 justify-center  flex p-5">
                <p class="text-white text-xl ">The Fact that Soraya is no one but Mazdak</p>
            </div>
            </div>

            <a class="flex mt-8 md:items-start-start md:justify-start items-center justify-center text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
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
        </section>
   
        

    <section>
        <p class="font-bold text-3xl md:text-start text-center md:text-4xl tracking-tight mt-16 text-white">
                About Me
        </p>
        <p class="text-gray-100 mt-6 md:text-start text-center  ">
            I'm 16 years old teenager developer from Iran who's in love with technology ,
            I started programming when I was 10 with C++.
            Now I mostly focused on Django , Python , Vue.js , Nuxt.js , AI , Ml , & Blockchain
            and of course Git , Docker , Linux and etc.
            Being developer means to have a power of creation for me 
        </p>
    </section>

  
    <section>
            
    <h3 class="font-bold text-3xl md:text-start text-center md:text-4xl tracking-tight mt-16 text-white">
                CV
    </h3>

    <div class="flex mt-16 flex-row items-center justify-center md:ml-14 md:space-x-52 space-x-10 ">
        <button class="cv md:ml-30   h-[56px]  flex flex-col md:flex-row  items-center  justify-center p-7 ">
            <p class="text-gray-100">CV - EN</p>
            <svg  class="fill-gray-100 w-[16px] h-[15px] md:ml-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
        </button>
        
        <button class="cv md:ml-30  h-[56px]  flex flex-col md:flex-row  items-center justify-center p-7 ">
            <p class="text-gray-100">CV - EN</p>
            <svg  class="fill-gray-100 w-[16px] h-[15px] md:ml-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
        </button>
    </div>

    </section>
  

    </div>
    </div>
</template>

<script setup>
useHead({
  title: 'Home',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Home' }
  ],

})
</script>
