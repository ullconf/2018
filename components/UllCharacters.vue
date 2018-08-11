<template>
  <div class="character-wrapper">
    <character-hairy :delay="2500"/>
    <character-wrangler :delay="2600"/>

    <character-swinging-doors :delay="2700"/>

    <character-pointing-out :delay="2800"/>
    <character-blackboard :delay="2700"/>

    <character-wheelchair-door :delay="2700"/>

    <character-dog-beads :delay="2600"/>
    <character-georgian-butler :delay="2500"/>
  </div>
</template>

<script>
import CharacterBlackboard from "~/components/characters/Blackboard.vue";
import CharacterHairy from "~/components/characters/Hairy.vue";
import CharacterWrangler from "~/components/characters/Wrangler.vue";
import CharacterSwingingDoors from "~/components/characters/SwingingDoors.vue";
import CharacterPointingOut from "~/components/characters/PointingOut.vue";
import CharacterWheelchairDoor from "~/components/characters/WheelchairDoor.vue";
import CharacterDogBeads from "~/components/characters/DogBeads.vue";
import CharacterGeorgianButler from "~/components/characters/GeorgianButler.vue";

export default {
  components: {
    CharacterBlackboard,
    CharacterHairy,
    CharacterWrangler,
    CharacterSwingingDoors,
    CharacterPointingOut,
    CharacterWheelchairDoor,
    CharacterDogBeads,
    CharacterGeorgianButler
  }
};
</script>

<style>
.character-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
