<template>
<div>

    <div class="flex flex-col justify-center px-8 demo1" id="mobile" :class="status_mobile">

        <div class="md:hidden ">
            <div id="burgerBtn" class="mt-6 ml-2" @click="burgerBtn" ></div>
            <ul id="nav" :class="nav_status" class="text-gray-400 text-xl ">
                <NuxtLink to="/"><li class="hover:text-gray-200">Home</li></NuxtLink>
                <NuxtLink to="/blog"><li class="hover:text-gray-200">Blog</li></NuxtLink>
                <NuxtLink to="/snippets"><li class="hover:text-gray-200">Snippets</li></NuxtLink>
                <a href="https://github.com/mazdakdev"><li class="hover:text-gray-200">Github</li></a>
                <a href="#cv"><li class="hover:text-gray-200">CV</li></a>
            </ul>
        </div>
        <div class="flex  flex-col justify-center md:items-start items-center max-w-2xl border-gray-700 mx-auto pb-16 " id="mobileBodyContent">
        
          <header>          
            <nav class="py-7 rounded ">
                <div class="md:container md:flex md:flex-col md:justify-center md:items-start md:mx-auto">
                    <div class="hidden md:flex md:w-auto md:order-1"  id="mobile-menu-4">
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0">
                            <li>
                                <NuxtLink to="/" class="block py-2 pr-4  text-gray-200  rounded p-0 " aria-current="page">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog" class="block py-2 pr-4  text-gray-400 hover:text-gray-200 rounded p-0">Blog</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/snippets" class="block py-2 pr-4  text-gray-400 hover:text-gray-200  rounded p-0">Snippets</NuxtLink>
                            </li>
                            <li>
                                    <a href="https://github.com/mazdakdev" target="_blank" class="block py-2 pr-4  text-gray-400  hover:text-gray-200 rounded p-0">Github</a>
                            </li> 
                            <li>
                                <a href="#cv" class="block py-2 pr-4  text-gray-400 hover:text-gray-200 rounded p-0">CV</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

           
            <div class="flex  flex-col-reverse md:flex-row md:items-start items-center animate__animated animate__backInDown md:space-x-10 z-40 mt-8">
                <div class="flex flex-col  md:items-start md:text-start text-center items-center">
                    <h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">
                        Mazdak Pakaghideh
                    </h1>
                    <h2 class="text-gray-200 mb-4">
                        Teenager Web developer 
        
                    </h2>
                    <p class="text-gray-400 mb-16">
                        Teenager Web , ML , AI , Blockchain Developer  &
                        Penetration tester from Iran
                    </p>
                </div>

                <div class="w-[146px] sm:w-[176px] flex items-center mb-8 z-50 ">
                    <img 
                        alt="Mazdak Pakaghideh"
                        height={176}
                        width={176}
                        src="~/assets/images/profile.jpeg"
                        class="rounded-full "
                    />
                </div>
            </div>

            <section class="animate__animated animate__backInLeft">
                <h3 class="font-bold text-3xl md:text-start text-center  md:text-4xl tracking-tight text-white">
                    Featured Posts
                </h3>
              

                <div class="flex gap-6 flex-col md:flex-row mt-6 " style="padding:1px;">
                    <NuxtLink to="/blog/why-python-is-best" class="post-1 md:w-[208px] md:h-[210px] h-40 shadow-sm justify-center items-center  flex p-5 hover:scale-[1.01] " >
                        <p class="text-white text-xl text-center  md:text-start ">
                          Here Is Why Python is Best !?
                        </p>
                    </NuxtLink>

                    <NuxtLink to="/blog/why-csharp-is-best" class="post-2  shadow-sm md:w-[208px] md:h-[210px] h-40 justify-center items-center  flex p-5 hover:scale-[1.01]">
                        <p class="text-white text-xl  text-center md:text-start  ">
                          Why C# is best !?
                        </p>
                    </NuxtLink>

                    <NuxtLink to="/blog/why-java-is-best" class="post-3 shadow-sm md:w-[208px] md:h-[210px] h-40 justify-center items-center   flex p-5 hover:scale-[1.01]">
                        <p class="text-white text-xl text-center md:text-start ">
                          Why Java is best !?
                        </p>
                    </NuxtLink>
                    
                </div>

                <NuxtLink to="/blog" class="flex mt-8 items-start-start justify-start  text-gray-400 leading-7 rounded-lg hover:text-gray-200 transition-all h-6">
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
                </NuxtLink>
            </section>
    
            

            <section>
                <p class="font-bold text-3xl md:text-start text-center md:text-4xl tracking-tight mt-16
                text-white">
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

                <div id="cv" class="flex mt-6 flex-row items-center justify-center md:ml-14 md:space-x-52 space-x-10 ">
                    <a href="https://raw.githubusercontent.com/mazdakdev/mazdakdev.github.io/main/Mazdak-Pakghideh-CV.pdf" download class="cv md:ml-30   h-[56px]  flex flex-col md:flex-row  items-center hover:scale-[1.05] justify-center p-7 ">
                        <p class="text-gray-100">CV - FA</p>
                        <svg  class="fill-gray-100 w-[16px] h-[15px] md:ml-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
                    </a>
                    
                    <a href=""   class="cv md:ml-30  h-[56px]  flex flex-col md:flex-row hover:scale-[1.05] items-center justify-center p-7 ">
                        <p class="text-gray-100">CV - EN</p>
                        <svg  class="fill-gray-100 w-[16px] h-[15px] md:ml-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
                    </a>
                </div>

            </section>
        </div>
  
    </div>
    
    <Footer />
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

    head: {
      title: 'Mazdak Pakaghideh',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Personal Website of Mazdak Pakaghideh '
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Mazdak,Mazdak Pakaghideh,Pakaghideh,developer,مزدک,مزدک پاک عقیده,پاک عقیده,iranian developer,teen developer'
        },
        {
          hid: 'subject',
          name: 'subject',
          content: 'Personal Website'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Mazdak,Mazdak Pakaghideh,Pakaghideh,developer,مزدک,مزدک پاک عقیده,پاک عقیده,iranian developer,teen developer'
        },
        {
          hid: 'copyright',
          name: 'copyright',
          content: 'Mazdak Pakaghideh'
        },
        {
          hid: 'language',
          name: 'language',
          content: 'EN'
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index,follow'
        },
        {
          hid: 'author',
          name: 'author',
          content: 'Mazdak Pakaghideh,Mazdak.software@gmail.com'
        },

        {
          hid: 'designer',
          name: 'designer',
          content: 'Mazdak Pakaghideh'
        },
        {
          hid: 'owner',
          name: 'owner',
          content: 'Mazdak Pakaghideh'
        },
        {
          hid: 'owner',
          name: 'owner',
          content: 'Mazdak Pakaghideh'
        },
        {
          hid: 'url',
          name: 'url',
          content: 'https://mazdak.dev'
        },
        {
          hid: 'url',
          name: 'url',
          content: 'https://mazdak.dev'
        },
        
      ],
    },
    data() {
        return {
            status_mobile: '',
            nav_status: 'hidden'
        }
    },
    
  
    
    methods: {
     
        burgerBtn() {
            if (this.status_mobile == '' && this.nav_status == 'hidden') {
                this.status_mobile = 'navigation';
                this.nav_status = '';
            }
            else {
                this.status_mobile = '';
                this.nav_status = 'hidden'
            }
            
        },
    }
})
</script>

<style lang="scss" scoped>

  @mixin transition($params) {
    -webkit-transition: $params;
      -moz-transition: $params;
    -khtml-transition: $params;
        -o-transition: $params;
            transition: $params;
  }

  @mixin scale($params) {
    -webkit-transform: scale($params);
      -moz-transform: scale($params);
    -khtml-transform: scale($params);
        -o-transform: scale($params);
            transform: scale($params);
  }

  @mixin box-shadow($params) {
    -webkit-box-shadow:$params;
      -moz-box-shadow:$params;
    -khtml-box-shadow:$params;
        -o-box-shadow:$params;
            box-shadow:$params;
  }

  @mixin rotate($params) {
    -webkit-transform: rotate($params);
      -moz-transform: rotate($params);
    -khtml-transform: rotate($params);
        -o-transform: rotate($params);
            transform: rotate($params);
  }

  @mixin opacity($opacity) {
    -webkit-opacity:$opacity;
      -moz-opacity:$opacity;
    -khtml-opacity:$opacity;
        -o-opacity:$opacity;
            opacity:$opacity;
  }

  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
      -moz-border-radius: $radius;
    -khtml-border-radius: $radius;
        -o-border-radius: $radius;
            border-radius: $radius;
  }


  #mobileBodyContent {
    position:relative;
    z-index:20;
    width:100%;
    height:100%;
    overflow:hidden;
    visibility:visible;
    @include transition(all 0.3s ease-in);
  }



  #burgerBtn {
    border-top:2px solid #6b7280;
    height:25px;
    width:30px;
    box-sizing:border-box;
    position:absolute;
    z-index:30;
    left:20px;
    top:15px;
    cursor:pointer;
    @include transition(all 0.3s ease-in);
    &:before {
      content:"";
      display:block;
      position:absolute;
      height:2px;
      width:30px;
      left:0;
      background:#6b7280;
      top:10px;
      @include transition(all 0.3s ease-in);
    }
    &:after {
      content:"";
      display:block;
      position:absolute;
      height:2px;
      width:30px;
      left:0;
      background:#6b7280;
      bottom:0;
      @include transition(all 0.3s ease-in);
    }
  }

  #nav {
    z-index:10;
    list-style-type:none;
    margin:100px 0 0 20px;
    padding:0;
    overflow:hidden;
    li {
      height:30px;
      width:0;
      margin:30px 0;

      @include transition(all 0.6s ease-in);
      & + li {
        margin-left:-40px;
        & + li {
          margin-left:-80px;
          & + li {
            margin-left:-120px;
          }
        }
      }
    }
  }



  .navigation {
    #nav li {
      width:200px;
      margin-left:0;
    }
    #burgerBtn {
      border-color:transparent;
      &:before {
        @include rotate(45deg);
        width:33px;
        left:-2px;
      }
      &:after {
        @include rotate(135deg);
        bottom:11px;
        width:33px;
        left:-2px;
      }
    }
  }

  .demo1.navigation {
    #mobileBodyContent {
      @include scale(0.85);
      margin-left:260px;
    }
  }



</style>
