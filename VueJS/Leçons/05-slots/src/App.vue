<script setup>
import { reactive, ref, Teleport, Transition, TransitionGroup } from 'vue'
  import MyCard from './components/MyCard.vue';
  import MyModal from './components/MyModal.vue';

  const credentials = reactive({
    username: '',
    password: ''
  })

  const modalVisible = ref('');
  const isShown = ref(false)
  const myGoats = ref([])

  const submitHandler = () => {
    if (credentials.username === 'admin' && credentials.password === 'admin') console.log('Logged in!');
  }
</script>

<template>
  <!-- <MyCard card-title="Blabla">
    <button>Je suis un bouton</button>
  </MyCard>
  <hr>
  <MyCard card-title="Truc">
    <span>Je suis un span</span>
  </MyCard> -->
  <!-- <Teleport to="body">
    <MyModal v-if="modalVisible === 'sign-in'" modal-title="Sign In" @modal-close="modalVisible = ''">
      <form action="#" @submit.prevent="submitHandler">
        <div>
          <label for="username">Username: </label>
          <input type="text" v-model="credentials.username">
        </div>
        <div>
          <label for="password">Password: </label>
          <input type="password" v-model="credentials.password">
        </div>
        <button>Submit</button>
      </form>
    </MyModal>
  </Teleport>
  <MyModal v-if="modalVisible === 'damascus'" modal-title="Demon" @modal-close="modalVisible = ''">
    <img src="https://external-preview.redd.it/zzrjlqoK5jAtU5T_rr3CKzG2bGjnjiPOmJYkt_ZuQIM.jpg?width=640&crop=smart&auto=webp&s=eee7563beb3029278295a1aa9fc96b5725e279ab" alt="">
  </MyModal>
  <button @click="modalVisible = 'sign-in'">Show Sign In</button>
  <button @click="modalVisible = 'damascus'">Show Sign In</button>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos eius, ea omnis repellendus sapiente dolorem, delectus cumque voluptatum sunt soluta quos molestiae reiciendis corrupti minima dignissimos vitae consequuntur expedita?
  Quisquam nisi rerum aliquam laudantium modi culpa? Nihil minima eos consequatur ipsam fugit iusto asperiores quibusdam eum dignissimos rem, sit ad aperiam maxime possimus perferendis nulla odio soluta in inventore!
  Itaque officia in praesentium doloribus eius labore! Ipsam nam obcaecati quo dolore necessitatibus ab dolorem id, nostrum commodi deserunt labore placeat repudiandae dolor pariatur similique dicta voluptas vitae? Voluptates, voluptatum!
  Quasi mollitia eveniet, modi voluptatibus necessitatibus aliquam id numquam a dignissimos nisi culpa quas ex? Omnis iste quaerat fugiat quos assumenda esse maxime, ipsum perspiciatis, ducimus aut, similique cupiditate asperiores.
  Sunt enim debitis rerum, maiores beatae possimus exercitationem nam voluptate inventore, nesciunt quasi, nihil quisquam facere ex molestias! Rem ratione officia maxime dolores a! Nesciunt a nostrum eius libero voluptatem.
  Reprehenderit, voluptatem? Porro aliquam ab quidem itaque placeat sequi. Earum aliquid ex debitis voluptas doloremque quidem, officiis perspiciatis dolorum natus laudantium magni tempora sint, rem dignissimos quam laborum assumenda repudiandae?
  Neque quos distinctio, ipsum natus doloribus aliquid modi quae quia tempora eius ipsa excepturi ad inventore sapiente porro fugiat. Accusantium vel quaerat doloremque praesentium laudantium a voluptates quod ad sint.
  Nulla sapiente maiores quia magnam necessitatibus. Ipsum, culpa numquam deleniti rem nulla quo dolore repellat obcaecati eligendi voluptates ipsam sed natus dolores quaerat dolorum dolor soluta vero, recusandae, nostrum similique!
  Sapiente quam autem, enim veniam est fugit dolores exercitationem, assumenda eum facere dolore neque reiciendis? Id veniam recusandae in consequuntur aspernatur animi sapiente, quo dolorum doloribus placeat, ipsum, explicabo porro?
  Iure distinctio molestiae deserunt possimus nulla ipsum voluptatem in nobis, ratione unde facere labore quidem, iusto sint beatae recusandae assumenda ut libero! Accusamus aperiam esse reprehenderit quos consequatur vitae pariatur.
  Consequatur cumque quisquam similique necessitatibus. Fuga, aspernatur autem! Vero, ullam! Nemo alias omnis dicta ex hic perspiciatis inventore cumque, similique provident libero. Ipsum laboriosam omnis consequuntur accusamus hic sed quis.
  Atque minus aut, sint dolores, ipsum tempora placeat sapiente totam animi deserunt fugiat iure nobis repellendus neque! Nihil quasi, earum maiores ratione eius amet in officiis. Repellat accusamus qui molestias.
  Iure totam repudiandae magnam necessitatibus quibusdam iste nesciunt ratione sapiente illo eos asperiores repellat minima in hic alias quod voluptatibus odio omnis placeat dicta fuga, natus ipsam ipsum voluptas. Est!
  Quibusdam quidem soluta harum aliquid impedit veritatis molestias nisi maiores consequuntur odit, tempora, sequi, quasi non. Nesciunt pariatur, consequuntur incidunt beatae illo quas harum. Mollitia harum sint aspernatur voluptate nulla!
  Saepe deserunt sequi rem quas rerum inventore ratione ut sit velit vel. Laborum illo iure suscipit hic similique distinctio reprehenderit nobis in, commodi, sunt et impedit aperiam officiis! Animi, culpa!
  Odit tenetur eaque aliquam beatae culpa fugit vero voluptatibus totam? Distinctio neque sunt voluptates eaque! Ut error sapiente, possimus, consequuntur quos quidem est ipsa tempora quibusdam esse, vel mollitia quas!
  Accusantium quos voluptates nemo nihil quibusdam cum dignissimos asperiores, non officiis ipsam voluptas aspernatur laborum, provident necessitatibus omnis cupiditate voluptatibus numquam libero eos et quasi atque. Eos voluptates asperiores necessitatibus?
  Ipsum, placeat explicabo, quam quis, similique totam voluptatum quibusdam aspernatur vitae voluptas fuga repudiandae dignissimos aliquam in soluta. Cupiditate, quaerat. Eius illum ipsum quaerat aperiam voluptatum dolorem voluptatibus animi nulla!
  Recusandae, quo molestias! Illo mollitia deserunt sequi tempora laboriosam ipsa temporibus et adipisci rerum nemo provident culpa, dolore iusto enim delectus similique at ratione officia. Delectus iure exercitationem repudiandae doloribus!
  Repellat ipsam reiciendis delectus quaerat magnam, nisi dolore, nostrum porro rerum accusamus commodi tempora sunt recusandae eaque consequuntur quas? Reprehenderit numquam minima laudantium maxime esse. Et delectus deserunt rem. Nostrum!
  Quam iure quaerat voluptates. Quam dolores distinctio quos quaerat omnis repudiandae amet. Necessitatibus est quod libero provident ipsa iusto eligendi architecto veniam nostrum blanditiis et debitis nemo, modi facilis nesciunt.
  Dolorum temporibus ipsum sed incidunt magni optio vel ad blanditiis ipsam earum exercitationem laborum reiciendis labore, aspernatur, laudantium cumque. Dignissimos, magnam? Dicta accusantium veritatis ipsam tenetur porro eos perferendis enim?
  Sit, numquam. Porro reiciendis officia voluptate reprehenderit ab soluta labore atque cupiditate molestias aperiam ut dolor, suscipit obcaecati voluptatibus. Expedita facere eum corporis omnis debitis, eveniet a temporibus aut esse.
  Quia modi animi in perspiciatis placeat ducimus aspernatur, vero eius? Alias assumenda deserunt eius nisi ducimus iure placeat maxime tempore. Iure, at sunt. Facere, aspernatur! Ut consequuntur quam culpa laborum.
  Quos totam alias cum quia quo voluptatum rem, facere tempore consequuntur hic? Beatae sapiente repudiandae, ex illo quibusdam inventore dignissimos aperiam dolorum saepe temporibus voluptatum magni, qui maiores? Neque, nisi.</p> -->
    <button @click="isShown = !isShown">{{ isShown ? 'Masquer' : 'Afficher' }}</button>
    <hr>
    <Transition>
      <!-- 
          v-enter-from
          v-enter-to
            v-enter-active

          v-leave-from
          v-leave-to
            v-leave-active

       -->
      <p v-if="isShown">Je suis un secret</p>
    </Transition>
    <Transition name="fade">
            <!-- 
          fade-enter-from
          fade-enter-to
            fade-enter-active

          fade-leave-from
          fade-leave-to
            fade-leave-active

       -->
      <p v-if="isShown">Je suis un autre secret</p>
    </Transition>
    <hr>
    <button @click="myGoats.push(1)">Add Goat</button>
    <ul>
      <TransitionGroup name="fade">
        <li v-for="(g, i) in myGoats" :key="i" >Je suis une chèvre</li>
      </TransitionGroup>
      </ul>
</template>

<style scoped>
  .v-enter-active, .v-leave-active,
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease,
                transform 1s ease;
  }

  .v-enter-from, .v-leave-to,
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .v-enter-from {
    transform: translateX(-50px);
  }
  
  .v-leave-to {
    transform: translateX(-50px);
  }
</style>
