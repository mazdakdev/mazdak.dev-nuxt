<template>
    <div class="flex flex-col justify-center px-8">
          <nav class="py-7 rounded ">
        
                    <div class="container flex flex-col justify-center items-start  mx-auto md:hidden">
                        <div class="flex md:order-2">
                            <button @click="toggleMenu" type="button" class="inline-flex items-start p-2 text-sm text-gray-500 rounded-lg md:hidden hover:opacity-70 focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>

                        <div class="justify-between items-center w-full md:flex md:w-auto md:order-1 ml-3 shadow-md text-center" :class="status" id="mobile-menu-4">
                            <ul class="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0">
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-200  rounded p-0 " aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-400 hover:text-gray-200 rounded p-0">Blog</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-400 hover:text-gray-200  rounded p-0">Snippets</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-400  hover:text-gray-200 rounded p-0">Projects</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-400 hover:text-gray-200 rounded p-0">CV</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        <div class=" flex flex-col md:items-start items-center max-w-2xl border-gray-700 mx-auto pb-16">
            <header>          

                <nav class="py-7 rounded ">
        
                    <div class="md:container md:flex md:flex-col md:justify-center md:items-start md:mx-auto">
                 

                        <div class="hidden md:flex md:w-auto md:order-1" :class="status" id="mobile-menu-4">
                            <ul class="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0">
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-200  rounded p-0 " aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-400 hover:text-gray-200 rounded p-0">Blog</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-400 hover:text-gray-200  rounded p-0">Snippets</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-400  hover:text-gray-200 rounded p-0">Projects</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4  text-gray-400 hover:text-gray-200 rounded p-0">CV</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div class="flex md:mt-10 flex-col-reverse md:flex-row md:items-start items-center fadeInDown md:space-x-10">
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
            
            <section class="md:fadeInLeft">
                <h3 class="font-bold text-3xl md:text-start text-center  md:text-4xl tracking-tight mb-6 text-white">
                    Featured Posts
                </h3>

                <div class="flex gap-6 flex-col md:flex-row  ">
                    <div class="post-1 md:w-[208px] md:h-[210px] hover:scale-[1.05] h-40 shadow-sm justify-center items-center md:justify-start md:items-start flex p-5 ">
                        <p class="text-white text-xl text-center  md:text-start ">The Fact that Soraya is no one but Mazdak</p>
                    </div>

                    <div class="post-2  shadow-sm md:w-[208px] hover:scale-[1.05] md:h-[210px] h-40 justify-center items-center md:justify-start md:items-start flex p-5">
                        <p class="text-white text-xl  text-center md:text-start  ">The Fact that Soraya is no one but Mazdak</p>
                    </div>

                    <div class="post-3 shadow-sm md:w-[208px] hover:scale-[1.05] md:h-[210px] h-40 justify-center items-center md:justify-start md:items-start  flex p-5">
                        <p class="text-white text-xl text-center md:text-start ">The Fact that Soraya is no one but Mazdak</p>
                    </div>
                </div>

                <a class="flex mt-8 items-start-start justify-start  text-gray-400  leading-7 rounded-lg hover:text-gray-200 transition-all h-6">
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
                    For me , being a developer means to have a power of creation 
                </p>
            </section>

        
            <section>
                    
                <h3 class="font-bold text-3xl md:text-start text-center md:text-4xl tracking-tight mt-16 text-white">
                            CV
                </h3>

                <div class="flex mt-6 flex-row items-center justify-center md:ml-14 md:space-x-52 space-x-10 ">
                    <button class="cv md:ml-30 hover:scale-[1.05]  h-[56px]  flex flex-col md:flex-row  items-center  justify-center p-7 ">
                        <p class="text-gray-100">CV - EN</p>
                        <svg  class="fill-gray-100 w-[16px] h-[15px] md:ml-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
                    </button>
                    
                    <button class="cv md:ml-30 hover:scale-[1.05] h-[56px]  flex flex-col md:flex-row  items-center justify-center p-7 ">
                        <p class="text-gray-100">CV - EN</p>
                        <svg  class="fill-gray-100 w-[16px] h-[15px] md:ml-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
                    </button>
                </div>

            </section>

         

        </div>
    </div>
 <footer class="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr class="w-full border-1 border-gray-800 mb-8" />

      <div class="flex m-auto mt-8 space-x-6 text-gray-200 lg:mt-0   ">       
            <a href="">
                 <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-200 w-6 h-6 hover:opacity-75"  viewBox="0 0 512 512">
                    <path
                        fill-rule="evenodd"
                        d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                        clip-rule="evenodd"
                        />
                  </svg>
            </a>
         
            <a href="" target="_blank" rel="noreferrer" aria-label="Twitter" class="hover:opacity-75">
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="w-6 h-6">
                    <path
                        fill-rule="evenodd"
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                        clip-rule="evenodd" 
                        />
                </svg>
            </a>
            
            <a href="" target="_blank" rel="noreferrer" aria-label="Twitter" class="hover:opacity-75">
              <svg class="w-6 h-6 fill-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path
                        fill-rule="evenodd"
                        d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                        clip-rule="evenodd"
                        />
                </svg>
            </a>

            <a href="" target="_blank" rel="noreferrer" aria-label="GitHub" class="hover:opacity-75">
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="w-6 h-6">
                    <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                        />
                </svg>
            </a>
     
      </div>

    </footer>
</template>



<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            status: 'hidden'
        }
    },
    methods: {
        toggleMenu() {

            if (this.status == "hidden") {
                this.status = '';
            }
            else {
                this.status = "hidden";
            }
            
        }
    }
})
</script>
