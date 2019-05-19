function gradingStudents(grades) {
    let multiple = 5;

    for (let i = 0; i < grades.length; i++) {
        let element = grades[i],
            num = Math.ceil(element / multiple) * multiple;

        if (num < 40) continue;

        if (element > multiple) {
            if (element % multiple != 0) {
                if (num - grades[i] > 3 || num - grades[i] >= 3) continue;
                grades[i] = num
            }
        } else {
            if (multiple % element != 0) {
                if (num - grades[i] > 3 || num - grades[i] >= 3) continue;
                grades[i] = num
            }
        }
    }
    return grades;
}
