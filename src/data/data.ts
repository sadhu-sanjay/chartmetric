import { IconChevronDown } from '~/icons/chevron-down-icon'
import IconHome from '~/icons/icon-home'

import frontImage from '~/../public/img1.jpg'

import type {
    DoubleTextProps,
    FeatureProps,
    HeaderProps,
    ActionSectionProps
} from '~/shared/types'


export const assetData = [
    {
        "id": "SPC001",
        "manufacturer": "ABC Electronics",
        "capacity": 1000,
        "voltage": 24,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC002",
        "manufacturer": "XYZ Solar",
        "capacity": 2000,
        "voltage": 48,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC003",
        "manufacturer": "SolarTech",
        "capacity": 1500,
        "voltage": 36,
        "status": "Inactive",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC004",
        "manufacturer": "SunPower Inc.",
        "capacity": 1200,
        "voltage": 12,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC005",
        "manufacturer": "EcoSolar",
        "capacity": 1800,
        "voltage": 24,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC006",
        "manufacturer": "SolarTech",
        "capacity": 900,
        "voltage": 12,
        "status": "Inactive",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC007",
        "manufacturer": "ABC Electronics",
        "capacity": 2500,
        "voltage": 48,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC008",
        "manufacturer": "XYZ Solar",
        "capacity": 3000,
        "voltage": 48,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC009",
        "manufacturer": "SunPower Inc.",
        "capacity": 2000,
        "voltage": 36,
        "status": "Inactive",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    },
    {
        "id": "SPC010",
        "manufacturer": "EcoSolar",
        "capacity": 1200,
        "voltage": 24,
        "status": "Active",
        "imageURL": "https://source.unsplash.com/random/800x600/?solar"
    }
]

export const actionSectionData: ActionSectionProps = {
    twoText: {
        title: {
            text: 'Double Click to Update Anything',
        },
        subtitle: {
            text: 'Double click the image placeholders to add images. Do the same for any text, then tweak styles and publish.',
        },
    },
    actions: []
}


export const heroProps: DoubleTextProps = {
    title: {
        text: "Welcome to Chicane",
        alignment: 'text-center',
        fontSize: 'text-7xl'
    },
    subtitle: {
        text: "Find the world of opportunites",
        alignment: 'text-center',
    }
}

export const twoColumnImageTextData: FeatureProps = {
    actionSection: {
        twoText: {
            title: {
                text: 'Double Click to Update Anything',
            },
            subtitle: {
                text: 'Double click the image placeholders to add images. Do the same for any text, then tweak styles and publish.',
            },
        },
        actions: [
            {
                text: 'Download',
                href: 'https://github.com/onwidget/tailnext',
                targetBlank: true,
            },
            {
                text: 'Read More',
                href: 'https://github.com/onwidget/tailnext',
                targetBlank: true,
            }
        ]
    },
    image: {
        url: frontImage.src,
        alt: 'Front Image',
        width: '100%',
        height: '100%',
    },
}

export const featuresLargeData: FeatureProps = {
    actionSection: {
        twoText: {
            title: {
                text: 'Featurs Large',
                fontSize: 'text-5xl',
                alignment: 'text-left',
            },
            subtitle: {
                text: 'You have never made website this fast before',
            },
        },
        actions: [
            {
                text: 'Read More',
                href: 'https://github.com/onwidget/tailnext',
                targetBlank: true,
                btnType: 'primary',
            }
        ]
    },
    image: {
        url: frontImage.toString(),
        alt: 'Front Image',
        width: '100%',
        height: '100%',
    },

}

export const headerData: HeaderProps = {
    links: [
        {
            label: 'Pages',
            icon: IconChevronDown,
            links: [
                {
                    label: 'About Us',
                    href: '/about',
                },
                {
                    label: 'Contact Us',
                    href: '/contact',
                },
                {
                    label: 'FAQ',
                    href: '/faq',
                },
                {
                    label: 'Pricing',
                    href: '/pricing',
                },
                {
                    label: 'Privacy Policy',
                    href: '/privacy',
                },
                {
                    label: 'Terms & Condition',
                    href: '/terms',
                },
            ]
        },
        {
            label: 'Assets',
            href: '/assets',
            icon: IconChevronDown,
        },
        {
            label: 'About',
            href: '/about',
            icon: IconHome,

        },

    ],
    actions: [
        {
            text: 'Product',
            href: 'https://github.com/onwidget/tailnext',
            targetBlank: true,
        },
        {
            text: 'Use Cases',
            href: 'https://github.com/onwidget/tailnext',
            targetBlank: true,
        },
        {
            text: 'Resources',
            href: 'https://github.com/onwidget/tailnext',
            targetBlank: true,
        },
        {
            text: 'Pricing',
            href: 'https://github.com/onwidget/tailnext',
            targetBlank: true,
        },
    ],
    isSticky: true,
    showToggleTheme: true,
    showRssFeed: false,
    position: 'right',
}
