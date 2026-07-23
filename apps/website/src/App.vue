<script setup lang="ts">
import NavBar from "./sections/NavBar.vue";
import Hero from "./sections/Hero.vue";
import Audience from "./sections/Audience.vue";
import ProblemSolution from "./sections/ProblemSolution.vue";
import Modules from "./sections/Modules.vue";
import HowItWorks from "./sections/HowItWorks.vue";
import FeatureGrid from "./sections/FeatureGrid.vue";
import Pricing from "./sections/Pricing.vue";
import Faq from "./sections/Faq.vue";
import CtaBanner from "./sections/CtaBanner.vue";
import FooterSection from "./sections/FooterSection.vue";
</script>

<template>
  <div class="min-h-screen bg-background">
    <NavBar />
    <main>
      <Hero />
      <Audience />
      <ProblemSolution />
      <Modules />
      <HowItWorks />
      <FeatureGrid />
      <Pricing />
      <Faq />
      <CtaBanner />
    </main>
    <FooterSection />
  </div>
</template>
