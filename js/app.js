const app = Vue.createApp({
    data: function() {
        return {
            // Main Page
            author: 'Christopher Moldenauer',
            careerTitles: [
                'Software Developer','UI/UX Engineer','Developer'
            ],
            summaryXs: 'Full stack software developer with strong skills in Python, JavaScript, and HTML/CSS. Upcoming associates degree in web and software development. Experience delivering innovative solutions through personal projects. Collaborative and detail-oriented, with a strong work ethic.',
            summaryMd: 'As a full stack software developer, I bring a strong foundation in programming languages such as Python, JavaScript, and HTML/CSS, as well as experience with a variety of web frameworks and database management systems. With an upcoming associates degree in web and software development, I have honed my skills through personal projects and am committed to delivering innovative solutions that meet the needs of clients and end-users alike. My collaborative and solution-oriented approach, combined with a strong work ethic and attention to detail, enables me to consistently deliver high-quality solutions on time and within budget.',
            contactInfo: [
                {icon: 'bi bi-telephone-fill', text: '+1 (414) 852-5174', color: false},
                {icon: 'bi bi-share-fill', text: 'linktr.ee/moldyhacker', color: false},
                {icon: 'bi bi-envelope-fill', text: 'chris.moldy@gmail.com', color: false},
                {icon: 'bi bi-github', text: 'github.com/moldyhacker', color: false},
            ],
            experience: [ // year: '' for single year projects startYear: '' & endYear: '' for multi-year jobs
                {title: 'Java Text-Based Adventure Game', year: '2022', project: true, description: [
                        'Designed and implemented a Java-based text-based adventure game that allowed players to explore a maze.',
                        'Developed the game\'s core mechanics, including room navigation, input parsing, and gameplay logic.',
                        'Designed and implemented maze layouts to create dynamic and challenging gameplay experiences.',
                        'Implemented text-based commands and inputs for player interaction, including movement, object interaction, and puzzle-solving.',
                        'Created a system to keep track of player progress, such as scoring, inventory management, or game states.',
                        'Developed gameplay elements, such as combat, puzzles, and resource management, to enhance gameplay depth and engagement.',
                        'Utilized storytelling techniques through text descriptions to create an immersive player experience.',
                    ], skills: [
                        'Java programming for game development',
                        'Text-based input parsing and command handling',
                        'Game mechanics design and implementation',
                        'Player progression and inventory management',
                        'Storytelling through text descriptions'
                    ], summary: 'I developed a text-based adventure game using Java as part of a school project. The game features a maze exploration theme where players navigate through a maze to complete challenges and reach the goal. The game incorporates object-oriented programming (OOP) concepts, including inheritance, polymorphism, and encapsulation, to model different game elements such as characters, items, and locations.',
                },
                {title: 'Database with Entity Framework and Dependency Injection', year: '2022', project: true, description: [
                    'Designed and implemented a media database project using Entity Framework, a popular Object Relational Mapping (ORM) framework, in a .NET environment.',
                    'Utilized Dependency Injection (DI) design pattern to achieve loose coupling and increased maintainability and testability of the codebase.',
                    'Developed database models, mappings, and context classes using Entity Framework to interact with the underlying database, allowing for seamless CRUD (Create, Read, Update, Delete) operations on different types of media, such as movies, music, and books.',
                    'Implemented DI container, such as Microsoft\'s built-in DI container or third-party libraries like NuGet, to manage dependencies and facilitate inversion of control (IoC) in the application.',
                    'Utilized DI to inject the appropriate media-specific services, repositories, or providers based on the type of media being displayed or interacted with, promoting code re-usability and maintainability.',
                    'Implemented best practices for performance optimization, error handling, and security measures, such as parameterized queries, exception handling, and input validation, to ensure robust and secure data access and manipulation.',
                    'Collaborated with team members, including developers, testers, and stakeholders, to gather requirements, design the database schema, and implement business logic according to project specifications.',
                    'Conducted unit testing, integration testing, and system testing to ensure the functionality and reliability of the application, and resolved defects and issues in a timely manner.',
                    ], skills: [
                        'Entity Framework (EF) for database access and ORM',
                        'Dependency Injection (DI) for loose coupling and maintainability',
                        'Database modeling, mappings, and context classes',
                        'CRUD operations for different types of media',
                        'DI container for managing dependencies and inversion of control (IoC)',
                        'Performance optimization, error handling, and security measures',
                        'Collaboration with team members and stakeholders',
                        'Testing and defect resolution',
                    ], summary: 'I designed and implemented an Entity Framework database using .NET technologies, incorporating dependency injection for flexible and extensible database operations. The project followed best practices for database design, validation, and error handling. I used C#, Visual Studio, and SQL Server to create a scalable and efficient database solution. The project showcased my expertise in Entity Framework, .NET technologies, and implementing dependency injection for maintainable and modular code.',
                },
                {title: 'JavaScript App Project', year: '2023', project: true, description: '', skills: '', summary: ''},
            ],
            experience1: [
                {title: 'MYSHOCK Tool & Die', startYear: '2018', endYear: 'Present', description: [

                    ], skills: [

                    ], summary: ''},
            ],
            skills: ['HTML5 / CSS3', 'JavaScript / TypeScript / ES6', 'Vue3, jQuery, Bootstrap', 'Java, C#, Python', '.Net / EF / IF', 'T-SQL / SQL Server', 'SOLID, ACID'],
            educationInfo: [
                {name: 'WCTC', startYear: '2022', endYear: '2024', degreeEarned: '(AAS) IT - Web and Software Developer', gpa: '4.0 / 4.0', societies: ['Phi Theta Kappa: Honor Society', 'National Technical Honor Society'], activities: ['Tri-Country Seminar']},
                {name: 'MATC', startYear: '2015', endYear: '2016', degreeEarned: '(TC) CNC Setup and Operations', gpa: '4.0/4.0', societies: ['Dean\'s List']},
            ],
            activityInfo: [
                {title: 'Meetup Host', startYear: '2022', endYear: 'Present', content: 'MKE Rock Climbing', description: 'I host a group that aims to help people develop skills in rock climbing and communicating with others.'},
                {title: 'Meetup Host', startYear: '2023', endYear: 'Present', content: 'MKE Coding Collective', description: 'I run a group that introduces people of all skill levels to different tips and tricks in the field of Software development.'},
                {title: 'Manufacturing Mentor', startYear: '2014', endYear: '2016', content: 'FRC Team 1675 Manufacturing Mentor', description: 'I would use my skills in the manufacturing field to teach high school students how to safely operate heavy machining equipment in a Tool and Die shop.'},
            ],
            tags: ['Rock Climbing', 'Teamwork', 'Software Development', 'Leadership', 'Full-Stack', 'JavaScript', 'Java', '.Net'],

            // References Page
            references: [
                {name: 'Mathew Green', title: 'IT Instructor', affiliation: 'WCTC', email: 'mgreen14@wctc.edu', phone: '+1 (414) 732-9820'},
                {name: 'Melissa Seamonson', title: 'IT Instructor', affiliation: 'WCTC', email: 'mseasonson@wctc.edu', phone: '+1 (262) 370-8420'},
                {name: 'Britney Schultz', title: 'IT Instructor', affiliation: 'WCTC', email: 'bschultz43@wctc.edu'},
                {name: 'Stacy Read', title: 'IT Instructor', affiliation: 'WCTC', email: 'sread@wctc.edu'},
                {name: 'Tyler Kowalchuk', title: 'IT Instructor', affiliation: 'WCTC', email: 'tkowalch@wctc.edu'},
                {name: 'Bernadette Swanson', title: 'Former Supervisor', affiliation: 'Ian\'s Pizza LLC', email: 'bernadettenatassiaswanson@gmail.com', phone: '+1 (414) 732-9820'},
                {name: 'Timothy Winkler', title: 'Business Partner', affiliation: 'Moldy Miniatures', email: 'timothy.winkler1993@gmail.com', phone: '+1 (414) 732-9820'},
            ],
        }
    },
})