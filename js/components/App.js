import AppButton from "./AppButton.js";
import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    template: `
        <div class="grid gap-6">
            <assignments></assignments>
        </div>
    `, components: {Assignments, Panel}

}