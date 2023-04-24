import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },
    template: `
        <section v-show="show && assignments.length" class="w-60">
            <div class="flex justify-between item-start">
                <h2 className="font-bold mb-2"> 
                    {{ title }} 
                    <span>({{ assignments.length}})</span>
                </h2>
            
            <button v-show="canToggle" @click="show = false">x</button>
            </div>
            
            <!--v-model is being used here to stay updated with the changes happening on the child component -->
            
            <assignment-tags 
                v-model:currentTag="currentTag"
                :initial-tags="assignments.map(a => a.tag)" 
            ></assignment-tags>
            
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                >
                
                </assignment>
            </ul>
            
            <slot></slot>
        </section>
    `, props: {
        assignments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
    },

    data(){
        return{
            currentTag: 'all',
            show: true
        }
    },

    computed: {

        filteredAssignments(){
            if (this.currentTag === 'all'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }

}