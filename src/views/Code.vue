<template>
  <div class="page-content">
    <h1>
      Find me on
      <a class="code-link" :href="githubLink" target="_blank">Github</a>!
    </h1>
    <p>
      I have experience as a Software Developer in the hole spectrum of the
      industry. Embedded Systems, Cloud Solutions, Back-end Systems, Front-End
      Development and Mobile Development. To put this into perspective, I could
      design and manufacture a PCB board with a microprocessor and connectivity
      in it, compile and boot a Unix distribution in it and create an HTTP
      server in C to host a web application I've build that consumes back-end
      services I developed and deployed to the cloud. But don't let that mislead
      you, I would never approach a real project with that "build all by myself"
      attitude. Mi focus is on delivering solutions that are reliable and
      efficient in both time and quality, with the help of the right team and
      building on top of the right existing tools.
    </p>
    <p>
      I have worked in all kinds of environments, small to large teams, solo
      projects and remote teams. I've worked under strict Scrum teams, and more
      flexible Canvan organization. I also keep myself up to date and see high
      value in proven development methodologies such as TDD, CI/CD and XP.
    </p>
    <h2>Technologies:</h2>
    <p>
      This are the technologies which I think I could jump in straight away if
      presented with a project: <br />
      <b
        >- C/C++ embedded(bare metal) and in POSIX systems, Python, FreeRTOS,
        .NET (Standard Framework and Core), Angular, Vue, Material Design, VHDL,
        Firebase, Azure, Android(Kotlin), Docker and Node.js.</b
      >
    </p>
    <p>
      This are technologies that I see valuable and I am still in the process of
      learning or applying, so I wouldn't be comfortable joining a project
      without clarifying that first: <br />
      <b>- GraphQL, GoLang, Rust, Flutter, ROS, Jenkins, GCP and many more!</b>
    </p>
    <h2>Projects:</h2>
    <p>
      As you probably guessed by now, I've worked in all kind of projects.
      Things like developing and producing IoT solutions, taking part in
      building big web applications from scratch and adding features to complex
      microservices systems and large front-end codebases.
    </p>
    <p>
      I am currently in the process of documenting and exposing the personal
      projects I've worked on, you can find some of them on my
      <a class="code-link" :href="githubLink" target="_blank">Github</a>
      already. Giving back to the open source community that has already given
      so much to society is also on my bucket list, so if you have ideas in that
      regard, hit me up!
    </p>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import InfoModule from '../data/info';

@Component
export default class Code extends Vue {
  githubLink = InfoModule.footerLinks.filter(
    x => x.iconClass === 'icon-github',
  )[0].link;
}
</script>

<style lang="scss" scoped>
.page-content {
  margin: 120px auto;
}

a {
  cursor: pointer;
}
</style>
