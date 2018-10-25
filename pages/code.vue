<template>
  <section class="container">
    <div class="text-center banner">
      <img src="~assets/images/Pointing Out.svg">
    </div>
    <div class="content col-sm-8 offset-sm-2">
      <h1>Code of Conduct</h1>
      <p>Everyone participating in any Úll event is required to agree to the following Code of Conduct. This includes all attendees, speakers, performers, patrons (sponsors), volunteers, and&nbsp;staff.</p>
      <p>Úll Conferences Limited is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, mental illness, neurotype, physical appearance, body, age, race, ethnicity, nationality, language, or religion. We do not tolerate harassment of participants in any&nbsp;form.</p>
      <p>Anyone who violates this Code of Conduct may be sanctioned or expelled from these events at the discretion of the event&nbsp;organisers.</p>
      <h2>Definitions</h2>
      <p>Harassment includes:</p>
      <ul>
        <li>Offensive comments related to gender, gender identity and expression, sexual orientation, disability, mental illness, neurotype, physical appearance, body, age, race, ethnicity, nationality, language, or&nbsp;religion</li>
        <li>Unwelcome comments regarding a person’s lifestyle choices and practices, including those related to food, health, parenting, drugs, and&nbsp;employment</li>
        <li>Deliberate misgendering or use of ‘dead’ or rejected&nbsp;names</li>
        <li>Gratuitous or off-topic sexual images or behavior in spaces where they’re not&nbsp;appropriate</li>
        <li>Physical contact and simulated physical contact (eg, textual descriptions like “hug” or “backrub”) without consent or after a request to&nbsp;stop</li>
        <li>Threats of violence</li>
        <li>Incitement of violence towards any individual, including encouraging a person to commit suicide or to engage in&nbsp;self-harm</li>
        <li>Deliberate intimidation</li>
        <li>Stalking or following</li>
        <li>Harassing photography or recording, including logging online activity for harassment&nbsp;purposes</li>
        <li>Sustained disruption of discussion</li>
        <li>Unwelcome sexual attention</li>
        <li>Pattern of inappropriate social contact, such as requesting/assuming inappropriate levels of intimacy with&nbsp;others</li>
        <li>Continued one-on-one communication after requests to&nbsp;cease</li>
        <li>Deliberate “outing” of any aspect of a person’s identity without their consent except as necessary to protect other community members or other vulnerable people from intentional&nbsp;abuse</li>
        <li>Publication of non-harassing private communication without consent by the involved&nbsp;parties</li>
      </ul>
      <p>We prioritize marginalized people’s safety over privileged people’s comfort. Úll organisers reserve the right not to act on complaints&nbsp;regarding:</p>
      <ul>
        <li>‘Reverse’ -isms, including ‘reverse racism,’ ‘reverse sexism,’ and&nbsp;‘cisphobia’</li>
        <li>Reasonable communication of boundaries, such as “leave me alone,” “go away,” or “I’m not discussing this with&nbsp;you.”</li>
        <li>Communicating in a ‘tone’ you don’t find&nbsp;congenial</li>
        <li>Criticising racist, sexist, cissexist, or otherwise oppressive behavior or&nbsp;assumptions</li>
      </ul>
      <h2>Consequences</h2>
      <p>Participants asked to stop any harassing behavior are expected to comply&nbsp;immediately.</p>
      <p>If a participant engages in harassing behavior, Úll organisers may take any action we deem appropriate, up to and including expulsion from all Úll events and identification of the participant as a harasser to other community members or the general&nbsp;public.</p>
      <h2>Reporting and Enforcement</h2>
      <p>If you are being harassed during a Úll event, notice that someone else is being harassed, or have any other concerns, please contact any member of our production, volunteer or security team, who will be trained in how to address and report any incidents that attendees bring to their&nbsp;attention.</p>
      <p>If the person who is harassing you is a member of staff, they will recuse themselves from handling your&nbsp;incident.</p>
      <p>All reports will be handled in the strictest confidence. We will respond as promptly as we&nbsp;can.</p>
      <h2>Thanks</h2>
      <p>This policy was based on the <a href="https://2018.admissionconf.com">Admission Conference Code of Conduct</a>, itself based on the <a href="https://2018.xoxofest.com/conduct">XOXO Community Code of Conduct</a> which in turn was based on resources provided by <a href="https://geekfeminism.org/about/code-of-conduct/">Geek Feminism</a>, and borrows heavily from similar open source policies authored by <a href="https://2018.jsconfau.com/code-of-conduct">JSConf AU</a> and <a href="https://www.djangoproject.com/conduct/">Django</a>.</p>
      <p>This policy is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a> license.</p>
      <p>We encourage other events to adopt (and enforce) similar policies by using and remixing&nbsp;ours.</p>
    </div>
    <page-footer />
  </section>
</template>

<script>
import PageFooter from "~/components/Footer.vue";

export default {
  components: {
    PageFooter
  },
  head() {
    return {
      title: "Úll 2018 Code of Conduct"
    };
  }
};
</script>

<style>
.banner {
  margin-top: 1.5rem;
}
</style>
