
day3(325489);

function day3(day3Input: number) {

    let width = 1;
    while ((width) * (width) < day3Input) {
        width += 2;
    }

    let ring = (width - 1) / 2;
    let lastOnRing = (width * width);
    let stepsOnRing = Math.abs((lastOnRing - day3Input - ring) % (width - 1));
    if (stepsOnRing > ring) {
        stepsOnRing -= ring;
    }

    console.log('input:', day3Input, ': total steps', ring + stepsOnRing);
}
