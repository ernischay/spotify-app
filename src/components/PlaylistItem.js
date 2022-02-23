export default function PlaylistItem({
    playlist: { images, name, description },
}) {
    console.log(images, name, description)

    return (
        <div className='playlistItem'>
            <img
                className='playlistImage'
                src={images['0'].url}
                alt='playlist'
            />
            <div className='playlistInfo'>
                <p className='playlistInfoName'>{name}</p>
                <p className='playlistInfoDescription'>{description}</p>
            </div>
        </div>
    )
}
