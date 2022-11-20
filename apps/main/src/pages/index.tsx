import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { NextPageWithLayout } from '~/pages/_app'
import { pageLayout } from '~/components/Page'
import List from '~/components/List'
import Top from '~/components/Top'
import getApi from '~/utilities/api'
import NextJS13Preview from '~/components/Banners/NextJS13Preview'

interface Props {
	stickyNotFound: boolean
	stickyPosts: any
	greeting: string
}

const Home: NextPageWithLayout = ({
	stickyNotFound,
	stickyPosts,
	greeting,
}: Props) => {
	return (
		<div>
			<Head>
				<title>TonyHe</title>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<meta name="description" content="A developer, blogger, podcaster" />
				<meta
					name="keywords"
					content="TonyHe, Lipeng He, Tony, Developer, Blogger, Podcaster, Blog, Personal Site, WordPress, Next.js, React.js, TypeScript, JavaScript"
				/>
			</Head>
			<div className="lg:mt-20 mt-0 lg:pt-0 pt-24">
				<div>
					<h1 className="flex items-center font-medium text-3xl leading-14 lg:text-1 text-black dark:text-white tracking-wide mb-0.5 whitespace-nowrap">
						<span className="animate-waveHand hover:animate-waveHandAgain inline-block cursor-pointer mr-2.5">
							👋
						</span>{' '}
						Hey{greeting}
						<a
							href="https://cal.com/tonyhe/15min"
							className="ml-2 mt-0.5 hidden lg:block"
							target="_blank"
							rel="noreferrer"
						>
							<span className="text-sm flex items-center ml-2 py-1 px-2.5 border border-gray-400 hover:shadow-sm hover:border-gray-500 hover:text-gray-600 text-gray-500 dark:text-white dark:border-white dark:hover:opacity-80 rounded-md tracking-normal">
								Let&apos;s chat →
							</span>
						</a>
					</h1>
					<p className="text-3 lg:text-2 text-gray-500 dark:text-gray-200 leading-14 tracking-wider font-light pl-1.5 pb-1.5 pt-1">
						I&apos;m currently living a<del>n absolutely not</del> meaningless
						life with <del>totally not</del> unachievable goals.
					</p>
				</div>
				<Top />
			</div>
			<div className="mt-10">
				{!stickyNotFound && <List.Static posts={stickyPosts} sticky={true} />}
			</div>
			<div className="mt-5">
				<NextJS13Preview />
			</div>
			<div className="mt-5">
				<List type="index" />
			</div>
		</div>
	)
}

Home.layout = pageLayout

export const getServerSideProps: GetServerSideProps = async () => {
	const resSticky = await fetch(
		getApi({
			sticky: true,
			perPage: 10,
			cateExclude: '5,2,74',
		})
	)
	const dataSticky = await resSticky.json()

	let stickyNotFound = false
	if (!dataSticky) {
		stickyNotFound = true
	}

	const greeting = [" there, it's Tony", ', Tony here', ", I'm Tony"][
		Math.floor(Math.random() * 10) % 3
	]

	return {
		props: {
			stickyNotFound: stickyNotFound,
			stickyPosts: dataSticky,
			greeting,
		},
	}
}

export default Home