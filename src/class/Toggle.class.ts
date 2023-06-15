/* The Toggle class is a TypeScript class that allows for switching between true/false and manually
setting the state of a boolean. */
export default class Toggle {
    private tog: boolean;

    /**
     * @param {boolean} v Default state of boolean
     */
    constructor(v: boolean) {
        this.tog = v;
    }
    
    /**
     * Get if boolean is true or false
     */
    public get isToggled(): boolean {
        return this.tog;
    }
    
    /**
     * Switch between true/false
     */
    public switch() {
        this.tog = !this.tog;
    }

    /**
     * Change manually state of boolean
     * @param {boolean} v 
     */
    public setToggle(v: boolean) {
        this.tog = v;
    }
    
}