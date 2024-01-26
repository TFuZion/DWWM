<script setup>
import { Teleport, reactive } from 'vue'
import { v4 as newId } from 'uuid'
    // const props = defineProps(['mode'])
    // props.mode
    const props = defineProps({
        mode: {
            type: String,
            default: 'add'
        },
        contact: {
            type: Object,
            default: null
        }
    })

    const emits = defineEmits(['addContact', 'editContact', 'closeModal'])

    const phobies = [
        'Damascus',
        'Spider',
        'Dark',
        'Water',
        'Ghost'
    ]

    const contactInfos = reactive({
        id: props.contact ? props.contact.id : undefined,
        firstname: props.contact ? props.contact.firstname : '',
        lastname: props.contact ? props.contact.lastname : '',
        email: props.contact ? props.contact.email : '',
        phoneNumber: props.contact ? props.contact.phoneNumber : '',
        phobies: props.contact ? props.contact.phobies : [],
        birthDate: props.contact ? props.contact.birthDate : new Date()
    })

    const submitHandler = () => {
        if (props.mode === 'add') emits('addContact', {
            ...contactInfos,
            id: newId()
        })
        else if (props.mode === 'edit') emits('editContact', {...contactInfos})
    }

</script>

<template>
    <Teleport to="#app-modal">
        <div class="modal-bg" @click.self="$emit('closeModal')">
            <div class="modal-content">
                <form action="#" @submit.prevent="submitHandler">
                    <h2>{{ mode.substring(0, 1).toUpperCase() + mode.substring(1).toLowerCase() }} a Contact</h2>
                    <div>
                        <label for="firstname">Firstname: </label>
                        <input type="text" id="firstname" v-model="contactInfos.firstname">
                    </div>
                    <div>
                        <label for="lastname">Lastname: </label>
                        <input type="text" id="lastname" v-model="contactInfos.lastname">
                    </div>
                    <div>
                        <label for="email">Email: </label>
                        <input type="email" id="email" v-model="contactInfos.email">
                    </div>
                    <div>
                        <label for="phone-number">Phone number: </label>
                        <input type="text" id="phone-number" v-model="contactInfos.phoneNumber"> 
                    </div>
                    <div>
                        <label for="birth-date">Birth date: </label>
                        <input type="date" id="birth-date" @input="contactInfos.birthDate = $event.target.valueAsDate" :valueAsDate="contactInfos.birthDate">
                    </div>
                    <div>
                        <label for="phobies">Phobies: </label>
                        <select multiple id="phobies" v-model="contactInfos.phobies">
                            <option v-for="p in phobies" :value="p">{{ p }}</option>
                        </select>
                    </div>
                    <button>{{ mode.substring(0, 1).toUpperCase() + mode.substring(1).toLowerCase() }} a Contact</button>
                </form>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
    .modal-bg {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: grid;
        place-content: center;
    }

    .modal-content {
        height: 60dvh;
        aspect-ratio: 1.5 / 1;
        padding: 2.5%;
        box-sizing: border-box;
        border-radius: 1.5rem;
        background-color: hsl(0, 0%, 75%);
    }

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;


        label, input, h2, button {
            font-family: monospace;
            
        }
        
        > h2 {
            font-size: 1.8rem;
        }

        > div {
            display: flex;
            align-items: center;


            > label, input {
                font-size: 1.2rem;
            }

            
            > label {
                width: 15ch;
                color: hsl(0, 0%, 20%);
            }
            
            > input {
                color: hsl(0, 0%, 95%);
                width: 100%;
                box-sizing: border-box;
                padding: 0.5em 1em;
                background-color: hsl(0, 0%, 15%);
                outline: none;
                border: 0.125em hsl(0, 0%, 95%) solid;
            }
        }



        > button:last-child {
            color: hsl(0, 0%, 95%);
            font-size: 1.5rem;
            border: none;
            border-radius: 0.5em;

            box-sizing: border-box;
                padding: 0.5em 1em;
                background-color: hsl(0, 0%, 15%);
                margin: auto 0 0 auto;
                transition: all 400ms ease;
            }
            
            > button:last-child:hover {
                cursor: pointer;
                transform: scale(1.05, 1.1);
                background-color: hsl(0, 0%, 25%);

        }
    }
</style>
