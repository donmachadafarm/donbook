import StoryCard from './StoryCard'

const stories = [
    {
        id: 1,
        name: 'John',
        src: '/catto.png',
        profile: '/dogo.jpg',
    },
    {
        id: 2,
        name: 'Elon',
        src: 'https://links.papareact.com/4zn',
        profile: 'https://links.papareact.com/kxk',
    },
    {
        id: 3,
        name: 'Jeff',
        src: 'https://links.papareact.com/k2j',
        profile: 'https://links.papareact.com/f0p',
    },
    {
        id: 4,
        name: 'Mark',
        src: 'https://links.papareact.com/xql',
        profile: 'https://links.papareact.com/snf',
    },
    {
        id: 5,
        name: 'Bill',
        src: 'https://links.papareact.com/4u4',
        profile: 'https://links.papareact.com/zvy',
    },
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => <StoryCard key={story.id} name={story.name} src={story.src} profile={story.profile} />)}
        </div>
    )
}

export default Stories