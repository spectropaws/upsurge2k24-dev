import Link from 'next/link';

export default function GoogleMaps() {
    return (
        <div className="w-full h-full transition-transform duration-700 ease-in-out transform hover:rounded-lg">
            {/*
            <iframe
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ filter: "invert(100%)" }}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Yeshwantrao%20Chavan%20College%20of%20Engineering+(Upsurge)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
                <Link href="https://www.gps.ie/">gps tracker sport</Link>
            </iframe>
            */}

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119118.2038380647!2d78.82803159726564!3d21.094862899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd495abf6622d6f%3A0x2bd70ec1faa74ad4!2sDepartment%20Of%20Computer%20Science%20And%20Engineering!5e0!3m2!1sen!2sin!4v1694333084486!5m2!1sen!2sin" width="100%" height="100%" className="w-full h-full" style={{ border: 0, filter: "invert(100%)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}
