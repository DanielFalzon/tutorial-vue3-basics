import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },
    template: `
        <section v-show="assignments.length">
            <h2 className="font-bold mb-2"> 
                {{ title }} 
                <span>({{ assignments.length}})</span>
            </h2>
            
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
        </section>
    `, props: {
        assignments: Array,
        title: String
    },

    data(){
        return{
            currentTag: 'all'
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