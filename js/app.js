const app = Vue.createApp({
    data: function() {
        return {
            references: [
                {name: 'Mathew Green', affiliation: 'WCTC', email: ''},
            ],
            careerTitles: [
                'Software Developer','UI/UX Engineer','Developer'
            ],
            educationInfo: [
                {name: 'WCTC', startYear: '2022', endYear: '2024', degreeEarned: '(AAS) IT - Web and Software Developer', gpa: '4.0 / 4.0'}
            ],
            skills: ['HTML5 / CSS3', 'JavaScript / TypeScript / ES6', 'Vue3, jQuery, Bootstrap', 'Java, C#, Python', '.Net / EF / IF', 'T-SQL / SQL Server', 'SOLID, ACID'],
            contactInfo: [
                {icon: 'bi bi-telephone-fill', text: '+1 (414) 852-5174', color: false},
                {icon: 'bi bi-share-fill', text: 'linktr.ee/moldyhacker', color: false},
                {icon: 'bi bi-envelope-fill', text: 'chris.moldy@gmail.com', color: true},
                {icon: 'bi bi-github', text: 'github.com/moldyhacker', color: true},
            ],
            author: 'Christopher Moldenauer',
            summaryXs: 'Full stack software developer with strong skills in Python, JavaScript, and HTML/CSS. Upcoming associates degree in web and software development. Experience delivering innovative solutions through personal projects. Collaborative and detail-oriented, with a strong work ethic.',
            summaryMd: 'As a full stack software developer, I bring a strong foundation in programming languages such as Python, JavaScript, and HTML/CSS, as well as experience with a variety of web frameworks and database management systems. With an upcoming associates degree in web and software development, I have honed my skills through personal projects and am committed to delivering innovative solutions that meet the needs of clients and end-users alike. My collaborative and solution-oriented approach, combined with a strong work ethic and attention to detail, enables me to consistently deliver high-quality solutions on time and within budget.',

        }
    }
})