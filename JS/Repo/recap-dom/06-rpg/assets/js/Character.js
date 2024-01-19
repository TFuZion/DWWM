class Character {
    constructor(name, className, playerName, stats, height, weight) {
        this.name = name;
        this.className = className;
        this.playerName = playerName;
        this.height = height;
        this.weight = weight;
        this.stats = stats;
        this.level = 1;
        this.exp = 0;
    }
}

export default Character