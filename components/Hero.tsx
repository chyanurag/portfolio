import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="flex flex-col sm:flex-row sm:justify-around p-5 mx-auto justify-center items-center">
            <div>
                <Image src={'/profile.png'} alt={"Profile pic"} width={400} height={400} className="w-64 h-64 rounded-full my-10"/>
            </div>
            <div>
                <h1 className="text-center">I am Anurag Choudhary</h1>
                <p className="text-center">I am a software developer and a passionate programmer</p>
                <div className="my-5 text-center">
                    <Link className="p-2 text-lg border-2 border-2-first" href="/projects">View My Projects</Link>
                </div>
            </div>
        </section>
    )
}
