import {IChampion} from './IChampion.interface.ts';

export class LOLService {
  private _database = LOLDATABASE;

  search(keyword: string): Array<IChampion> {
    if (!keyword) {
      return this._database;
    } else {
      keyword = keyword.toLowerCase();
      return this._database.filter(item => item.Name.toLowerCase().indexOf(keyword) != -1);
    }

  }

  getChampionById(Id: number): IChampion {
    return this._database.find(champion => champion.Id == Id);
  }

  getCategories() {
    return [
      'Fighter',
      'Tank',
      'Mage',
      'Marksman',
      'Assassin',
      'Support'
    ];
  }
}

var LOLDATABASE = [
  {
    Id: 1,
    Name: 'Aatrox',
    Role: 'Fighter',
    Description: `Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's seemingly living blade drinks in their blood, empowering him and fueling his brutal, elegant campaign of slaughter.`,
    Alias: 'The Darkin Blade',
    ImageUrl: 'http://vignette2.wikia.nocookie.net/leagueoflegends/images/5/58/Aatrox_Render.png/revision/latest/scale-to-width-down/270?cb=20150129203642',
    Attack: 5,
    Defense: 5,
    Ability: 5,
    Difficult: 5
  },
  {
    Id: 2,
    Name: 'Ahri',
    Role: 'Mage',
    Description: `The Ionian countryside burned. Noxian Legions ripped through the land like a serrated knife, their gleaming armor blood-red in the sinking sun. Blazing temples lit the waning daylight, and distant cries of anguish filled the air.`,
    Alias: 'The Nine-Tailed Fox',
    ImageUrl: 'http://vignette2.wikia.nocookie.net/leagueoflegends/images/f/f1/Ahri_Render.png/revision/latest?cb=20141124192914',
    Attack: 5,
    Defense: 3,
    Ability: 10,
    Difficult: 1
  },
  {
    Id: 3,
    Name: 'Amumu',
    Role: 'Tank',
    Description: `Amumu is a diminutive, animated cadaver who wanders the world, trying to discover his true identity. He rose from an ancient shuriman tomb bound in corpse wrappings with no knowledge of his past, consumed with an uncontrollable sadness.`,
    Alias: 'The Sad Mummy',
    ImageUrl: 'http://vignette2.wikia.nocookie.net/leagueoflegends/images/1/17/Amumu_Render.png/revision/latest/scale-to-width-down/270?cb=20141112002839',
    Attack: 2,
    Defense: 10,
    Ability: 5,
    Difficult: 8
  },
  {
    Id: 4,
    Name: 'Caitlyn',
    Role: 'Marksman	',
    Description: `One of the reasons Piltover is known as the City of Progress is because it has an extraordinarily low crime rate. This hasn't always been the case; brigands and thieves of all sorts used to find the city-state an ideal mark for plunder, primarily due to the valuable resources it imports to fuel its techmaturgical research. Some even theorize that it would have fallen long ago to the chaos of organized crime if not for Caitlyn, the Sheriff of Piltover.`,
    Alias: 'The Sheriff of Piltover',
    ImageUrl:'http://vignette4.wikia.nocookie.net/leagueoflegends/images/e/ee/Caitlyn_Render.png/revision/latest/scale-to-width-down/270?cb=20141112010427',
    Attack: 5,
    Defense: 5,
    Ability: 5,
    Difficult: 5
  },
  {
    Id: 5,
    Name: 'Brand',
    Role: 'Mage	',
    Description: `In a faraway place known as Lokfar there was a seafaring marauder called Kegan Rodhe. As was his people’s way, Kegan sailed far and wide with his fellows, stealing treasures from those unlucky enough to catch their attention. To some, he was a monster; to others, just a man. One night, as they sailed through the arctic waters, strange lights danced over the frozen wastes. There was something hypnotic about them; it was something that drew them to it like moths to a flame. Trekking across the frozen waste, they came to a cave covered in ancient runes. Though the meaning of the runes was long lost to them, Kegan led the way inside. Inside a perfect cage of ice floated a dancing column of flame. There was no way such a thing should be burning, especially not in this place. However, its movement was as hypnotic as a siren's song, captivating and seductive. While the others stayed back, Kegan could not help but approach it while holding out his hand...`,
    Alias: 'The Burning Vengeance',
    ImageUrl:'http://vignette3.wikia.nocookie.net/leagueoflegends/images/f/f1/Brand_Render.png/revision/latest/scale-to-width-down/265?cb=20140927155323',
    Attack: 7,
    Defense: 1,
    Ability: 1,
    Difficult: 3
  },
  {
    Id: 6,
    Name: `Cho'Gath`,
    Role: 'Tank	',
    Description: `There is a place between dimensions, between worlds. To some it is known as the Outside, to others it is the Unknown. To those that truly know, however, it is called the Void. Despite its name, the Void is not an empty place, but rather the home of unspeakable things - horrors not meant for minds of men. Cho'Gath is a creature born of the Void, a thing whose true nature is so awful most will not speak its name. Its fellows have been poking at the walls that divide dimensions for a crack, a way into Runeterra, where they can visit their own personal paradise of horror upon the world. They are called the Voidborn, creatures so ancient and terrible that they have been removed from history altogether. It is rumored that the Voidborn command vast armies of unspeakable creatures on other worlds, that they were once driven from Runeterra by powerful magic lost to antiquity.`,
    Alias: 'The Terror of the Void',
    ImageUrl:'http://vignette2.wikia.nocookie.net/leagueoflegends/images/2/25/Cho%27Gath_Render.png/revision/latest/scale-to-width-down/270?cb=20150312220309',
    Attack: 1,
    Defense: 10,
    Ability: 10,
    Difficult: 8
  },
  {
    Id: 7,
    Name: `Darius`,
    Role: 'Fighter	',
    Description: `There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened warrior. Orphaned at a young age, Darius had to fight to keep himself and his Draven younger brother alive. By the time he joined the military, he had already developed the strength and discipline of a veteran soldier. The first true test of Darius' resolve occurred in a crucial battle against Demacia, where the Noxian forces were exhausted and outnumbered. Darius' captain called for his troops to retreat, but Darius refused to accept such an act of cowardice. Breaking formation, Darius strode towards the captain and decapitated him with one sweep of his gigantic axe. Both terrified and inspired, the soldiers followed Darius into battle and fought with incredible strength and fervor. After a long and grueling battle, they ultimately emerged victorious.`,
    Alias: 'The Hand of Noxus',
    ImageUrl:'http://vignette4.wikia.nocookie.net/leagueoflegends/images/d/d0/Darius_Render.png/revision/latest/scale-to-width-down/270?cb=20140805210328',
    Attack: 2,
    Defense: 5,
    Ability: 1,
    Difficult: 1
  },
  {
    Id: 8,
    Name: `Galio`,
    Role: 'Tank	',
    Description: `Long before the regulation of magic, mages experimented with the creation of artificial life. Now forbidden, instilling golems with reason was once not so uncommon a practice amongst the more expert of craftsmen. One such visionary was the Demacian artificer, Durand. Peerless at crafting sentient beings, Durand's constructs served as tireless guardians for the border towns of his beloved city-state, affording them protection from their Noxian neighbors. For his own defense, however, Durand kept his magnum opus: Galio. This mighty construct forged in the image of a gargoyle kept him safe on his journeys, allowing him to perform his important work without fear of reprisal from those hostile to his homeland. That is, until dealing with his taxing sentinels finally roused the ire of the Noxian High Command.`,
    Alias: `The Sentinel's Sorrow`,
    ImageUrl: 'http://vignette4.wikia.nocookie.net/leagueoflegends/images/9/96/Galio_Render.png/revision/latest/scale-to-width-down/270?cb=20141004014602',
    Attack: 5,
    Defense: 5,
    Ability: 5,
    Difficult: 5
  }
];