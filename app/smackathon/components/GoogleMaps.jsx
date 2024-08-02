import Link from 'next/link';

export default function GoogleMaps() {
    return (
        <div className="w-full h-full">
            <iframe
                width="100%"
                height="100%"
                className="w-full h-full rounded-full"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Yeshwantrao%20Chavan%20College%20of%20Engineering+(Upsurge)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
                <Link href="https://www.gps.ie/">gps tracker sport</Link>
            </iframe>
        </div>
    );
}
