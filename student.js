const student = {
    signUpDateTime
    classCredits
    studentEmail
    ParentEmail
    ParentName
    ParentPhone
    day_of_week
    timeSlot
    userName
    passWord
    birthday
    fullName
    profilePicSrc
    gender
    address_city

    wallMessagesPosts=[
        {
            commenterThumb,
            commenterName,
            commentText
        }
    ]

    showcasePosts=[
        {
            postDate,
            postTitle,
            postSubject,
            postLink,

            postComments=[
                {
                    commenterThumb,
                    commenterName,
                    comment
                }
            ]
        }
    ]

    // XP is just a number, 100 points per class attended
    XP
    accessLvl = 0
        // level 0 means no access to Unity or JS or PY.  (only Scratch and HTML/CSS)
        // level 1 is after HTML/CSS
        // level 1 will allow access to Py and JS
        // level 2 is after completion of JS or PY
        // level 2 will allow access to Unity

    subjects = {
        // starting values:
        HTML_CSS = 0
        JS = 0
        py = 0
        scratch = 0
        Unity = 0        
    }
}