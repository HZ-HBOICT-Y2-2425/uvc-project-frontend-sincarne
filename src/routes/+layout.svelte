<script lang="ts">
    import '../app.css';
    let { children } = $props();
</script>

<section class="bg-cover bg-center bg-fixed min-h-screen flex flex-col" style="background-image: url('/SinCarneBg.png')">
    <header>
        <section class="bg-black bg-opacity-50 text-slate-100 top-0 w-full">
            <nav class="max-w-7xl mx-auto px-2 sm:px-2 md:px-4 lg:px-6 flex items-center justify-between h-16">
                <section>
                    <a href="/"><img src="/SinCarneLogo.png" alt="SinCarne Logo" class="h-10 w-auto object-contain"/></a>
                </section>
                <section class="flex items-center space-x-2 sm:space-x-2 md:space-x-4 lg:space-x-6">
                    <a href="/about">
                        <button class="hover:text-gray-400 border hover:border-gray-400 border-slate-100 rounded-sm transition-all p-2 sm:border lg:border-2">
                            About
                        </button>
                    </a>
                    <a href="/co2global"> 
                        <button class="hover:text-gray-400 border hover:border-gray-400 border-slate-100 rounded-sm transition-all p-2 sm:border lg:border-2">
                            CO2
                        </button> 
                    </a>
                    <a href="/leaderboard">
                        <button class="hover:text-gray-400 border hover:border-gray-400 border-slate-100 rounded-sm transition-all p-2 sm:border lg:border-2">
                            Leaderboard
                        </button>   
                    </a>
                    <a href="/recipesList">
                        <button class="hover:text-gray-400 border hover:border-gray-400 border-slate-100 rounded-sm transition-all p-2 sm:border lg:border-2">
                            Recipes
                        </button>
                    </a>
                    <a href="/teams">
                        <button class="hover:text-gray-400 border hover:border-gray-400 border-slate-100 rounded-sm transition-all p-2 sm:border lg:border-2">
                            Teams
                        </button>
                    </a>

                    <a href="/diet">
                        <button class="hover:text-gray-400 border hover:border-gray-400 border-slate-100 rounded-sm transition-all p-2 sm:border lg:border-2">
                            Diet
                        </button>
                    </a>
                    <a href="/milestones">
                      <button class="hover:text-gray-400 border hover:border-gray-400 border-slate-100 rounded-sm transition-all p-2 sm:border lg:border-2">
                         Milestones 
                      </button>  
                    </a>
                    <button>
                        <a href="/profile">
                            <img src="/profile.png" alt="Profile" class="h-8 sm:h-8 md:h-10 lg:h-12 w-auto max-h-12 max-w-12 object-cover"/>
                        </a>
                        
                    </button>
                </section>
            </nav>
        </section>
    </header>

    <main class="mt-2 flex-grow relative">
        {@render children()}
    </main>
    <a href=/popup>
    <footer class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center w-full mt-auto">
        <p class="p-2 text-center text-slate-50 font-bold">TOGETHER, WE CAN MAKE A DIFFERENCE</p>
    </footer>
    </a>
</section>


<style>
</style>
