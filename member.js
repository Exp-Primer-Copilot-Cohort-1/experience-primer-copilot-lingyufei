function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    if (member.className === "member") {
        member.className += " responsive";
        memberSkills.className += " responsive";
    } else {
        member.className = "member";
        memberSkills.className = "memberSkills";
    }
}