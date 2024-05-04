import Image from 'next/image'
export default function UserCard({ title, username, imageUrl }) {
    return (
        <div className="flex items-center space-x-4">
            <div className="w-12 h-12 relative">
                <Image src={imageUrl} alt="Imagen de usuario" layout="fill" className="rounded-full  object-cover"/>
            </div>
            <div>
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-sm text-gray-500">{username}</p>
            </div>

        </div>

    )
}