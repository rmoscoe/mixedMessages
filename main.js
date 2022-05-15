const firstAdjectives = ['artless', 'bawdy', 'beslubbering', 'bootless', 'churlish', 'cockered', 'clouted', 'craven', 'currish', 'dankish', 'dissembling', 'droning', 'errant', 'fawning', 'fobbing', 'froward', 'frothy', 'gleeking', 'goatish', 'gorbellied', 'impertinent', 'infectious', 'jarring', 'loggerheaded', 'lumpish', 'mammering', 'mangled', 'mewling', 'paunchy', 'pribbling', 'puking', 'puny', 'quailing', 'rank', 'reeky', 'roguish', 'saucy', 'spleeny', 'spongy', 'surly', 'tottering', 'unmuzzled', 'vain', 'venomed', 'villainous', 'warped', 'wayward', 'weedy', 'yeasty'];
const secondAdjectives = ['base-court', 'bat-fowling', 'beef-witted', 'beetle-headed', 'boil-brained', 'brobdingnagian', 'clapper-clawed', 'clay-brained', 'common-kissing', 'crook-pated', 'dismal-dreaming', 'dizzy-eyed', 'doghearted', 'dread-bolted', 'earth-vexing', 'elf-skinned', 'fat-kidneyed', 'fen-sucked', 'flap-mouthed', 'fly-bitten', 'folly-fallen', 'fool-barn', 'full-gorged', 'guts-gripping', 'half-faced', 'hasty-witted', 'hedge-born', 'hell-hated', 'idle-headed', 'ill-breeding', 'ill-nurtured', 'knotty-pated', 'meely-mouthed', 'milk-livered', 'motley-minded', 'onion-eyed', 'plume-plucked', 'pox-marked', 'reeling-ripe', 'ough-hewn', 'rude-growing', 'rump-fed', 'scruffy-looking', 'shard-borne', 'sheep-biting', 'spur-galled', 'swag-bellied', 'tardy-gaited', 'tickle-brained', 'toad-spotted', 'urchin-snouted', 'weather-bitten'];
const nouns = ['apple-john', 'baggage', 'barnacle', 'bladder', 'blunderbuss', 'boar-pig', 'bugbear', 'bum-bailey', 'canker-blossom', 'clack-dish', 'clotpole', 'coxcomb', 'codpiece', 'crotch-pheasant', 'death-token', 'dewberry', 'flap-dragon', 'flax-wench', 'flirt-gill', 'foot-licker', 'fustilarian', 'giglet', 'gudgeon', 'haggard', 'harpy', 'hedge-pig', 'horn-beast', 'hugger-mugger', 'jolthead', 'lewdster', 'lout', 'maggot-pie', 'malt-worm', 'mammet', 'measle', 'minnow', 'miscreant', 'moldwarp', 'mumble-news', 'nerf-hearder', 'nut-hook', 'pigeon-egg', 'pignut', 'puttock', 'pumpion', 'ratsbane', 'scut', 'skainsmate', 'strumpet', 'varlet', 'vassal', 'whey-face', 'wagtail'];

let insultButton = document.getElementById('insult');

insultButton.addEventListener('click', insult);

function insult() {
    let firstWord = Math.floor(Math.random() * firstAdjectives.length);
    let secondWord = Math.floor(Math.random() * secondAdjectives.length);
    let thirdWord = Math.floor(Math.random() * nouns.length);
    let firstAdjective = firstAdjectives[firstWord];
    let secondAdjective = secondAdjectives[secondWord];
    let noun = nouns[thirdWord];
    let insult = `${firstAdjective} ${secondAdjective} ${noun}`;
    const paragraph = document.getElementById('newInsult');
    paragraph.innerHTML = insult;
}



