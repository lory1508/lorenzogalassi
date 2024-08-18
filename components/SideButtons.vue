<template>
	<div class="absolute right-4 top-16 h-screen">
		<nav class="social">
			<ul>
				<li 
					class="shadow-md  cursor-pointer border-2 border-slate-600 border-opacity-5 bg-slate-950 bg-opacity-50 hover:bg-sky-400 hover:shadow-none" 
					@click="goto('twitter')"
				>
					<a class="text-xl font-semibold flex flex-row align-middle items-center gap-8">
						<UIcon name="fa6-brands:x-twitter" class="w-6 h-6" />
						<span>
							Twitter
						</span>
					</a>
				</li>
				<li 
					class="shadow-md  cursor-pointer border-2 border-slate-600 border-opacity-5 bg-slate-950 bg-opacity-50 hover:bg-opacity-100 text-white hover:shadow-none" 
					@click="goto('github')"
				>
					<a class="text-xl font-semibold flex flex-row align-middle items-center gap-8">
						<UIcon name="fa6-brands:github" class="w-6 h-6" />
						<span>
							Github
						</span>
					</a>
				</li>
				<li 
					class="shadow-md  cursor-pointer border-2 border-slate-600 border-opacity-5 bg-slate-950 bg-opacity-50 hover:shadow-none hover:bg-blue-500" 
					@click="goto('linkedin')"
				>
					<a class="text-xl font-semibold flex flex-row align-middle items-center gap-8">
						<UIcon name="fa6-brands:linkedin" class="w-6 h-6" />
						<span>
							Linkedin
						</span>
					</a>
				</li>
				<li 
					class="shadow-md  cursor-pointer border-2 border-slate-600 border-opacity-5 bg-slate-950 bg-opacity-50 hover:shadow-none hover:bg-red-500" 
					@click="goto('gmail')"
				>
					<a class="text-xl font-semibold flex flex-row align-middle items-center gap-8">
						<UIcon name="fa6-brands:google" class="w-6 h-6" />
						<span>
							Gmail
						</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
a {
  color: #fff;
  text-decoration: none;
}
.social {
  position: fixed;
  top: 20px;
}
.social ul {
  padding: 0px;
  transform: translate(-50px, 0);
}
.social ul li {
  display: block;
  margin: 5px;
  // background: rgba(0, 0, 0, 0.25);
  width: 300px;
  text-align: left;
  padding: 10px;
  border-radius: 30px;
  transition: all 1s;
}
.social ul li:hover {
  transform: translate(-110px, 0);
  // background: rgba(255, 255, 255, 0.75);
}
// .social ul li:hover a {
//   color: #000;
// }
.social ul li:hover i {
  color: #fff;
  background: rgba(0, 0, 0, 0.75);
  transform: rotate(360deg);
  transition: all 1s;
}
.social ul li i {
  // margin-left: 10px;
	margin-right: 15px;
  color: #000;
  background: #fff;
  padding: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  background: #ffffff;
  transform: rotate(0deg);
}

body {
  background: #4F8B89;
  color: #fff;
  font-family: 'Raleway', sans-serif;
}
</style>