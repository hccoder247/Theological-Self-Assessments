function calculateScore() {
    var view1Score = 0; // Scores for The Model of Unlimited Dominion
    var view2Score = 0; // Scores for The Model of Self-Limited Dominion
    var view3Score = 0; // Scores for The Model of Limited Dominion

    // Calculate scores (assuming each view is represented by equal numbers of questions)
    for (var i = 1; i <= 4; i++) {
        view1Score += parseInt(document.getElementById("q" + i).value);
    }
    for (var i = 5; i <= 8; i++) {
        view2Score += parseInt(document.getElementById("q" + i).value);
    }
    for (var i = 9; i <= 12; i++) {
        view3Score += parseInt(document.getElementById("q" + i).value);
    }

    var highestScore = Math.max(view1Score, view2Score, view3Score);
    var resultText = "";
    var descriptionText = "";

    if (highestScore === view1Score) {
        resultText = "According to your responses, you align most closely with: The Model of Unlimited Dominion.";
        descriptionText = `This model asserts God's absolute power and control over creation. God is conceived as omnipotent and completely free to determine what exists. The divine will is absolute; whatever God wills happens and nothing occurs outside of this will. Yet, God is not just powerful but also embodies love, justice, mercy, goodness, and wisdom. However, the model holds that attributes such as love, if not coupled with absolute power, would result in a being unworthy of worship. The problem of evil in this model is accounted for by the allowance of freedom, which humans abused, leading to sin, suffering, and death not only for themselves but for all creation. Despite the inability of humans to not sin, they are still accountable for their sinful actions. The suffering and terrible events are seen as either just retribution for sin, a means to moral and spiritual maturity, or a test of faith. Not all suffering is justified, with some remaining a mystery within God's creation, beyond human comprehension. The ultimate justification of God’s actions and the presence of evil is deferred to eternal life, where it is believed that God's providence will be made clear.`;
    } else if (highestScore === view2Score) {
        resultText = "According to your responses, you align most closely with: The Model of Self-Limited Dominion.";
        descriptionText = `In this view, God's power is inherently unlimited but is self-limited to allow for human freedom. A world with free will is seen as superior to one with beings incapable of choosing. Maturity and soul-making require freedom and the ability to learn from choices, including mistakes. God's pleasure is derived from love and worship that are freely given. Evil is the price of freedom and the nature of the maturing process. Not all suffering can be justified as useful for growth or necessary to God's plan. God could prevent certain evils but chooses not to, as consistent divine intervention would undermine the development of moral responsibility and the natural order. The full justification of God's allowance of evil is deferred to an understanding that will come from the perspective of eternal life, where it is believed that the end of the salvation process will be seen to outweigh the suffering it caused.`;
    } else {
        resultText = "According to your responses, you align most closely with: The Model of Limited Dominion.";
        descriptionText = `This model redefines God's power by introducing limitations based on the nature of love, which respects freedom. Thus, divine power is not coercive but persuasive, directing, and influential. God is the ground of all being, but in a relational world, there are other powers and realities that also affect our existence. Evil is not solely due to human resistance to God but arises from conflicts among various "goods" and values. Conflicts between loyalties and pursuits of different values result in moral ambiguities and tragedies. God is present in this world, drawing us toward the best possible outcomes, which sometimes involve suffering. God works within the limits of what is possible, with outcomes partly depending on creaturely response to God's lure. There is no final justification for all evils; some horrors are seen as sheer wreckage without justification. Yet, the overall goodness and worth of creation are affirmed by grace.`;
    }

    document.getElementById("result").innerHTML = "<strong>" + resultText + "</strong><p>" + descriptionText + "</p>";
}
function updateSliderValue(slider) {
    var outputId = slider.id + "Value";
    document.getElementById(outputId).textContent = slider.value;
}

