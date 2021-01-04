import Head from 'next/head'
import React from 'react'
import Content from '~/components/Content'
import { GetServerSideProps } from 'next'
import List from '~/components/List'
import { getApi } from '~/utilities/Api'
import SubscriptionBox from '~/components/SubscriptionBox'
import Icons from '~/components/Icons'
import Link from 'next/link'

interface Sticky {
  stickyNotFound: boolean
  stickyPosts: any
  info: { name: string; count: number; id: number }
}

export default function Cate({ stickyNotFound, stickyPosts, info }: Sticky) {
  return (
    <div>
      <Head>
        <title>{info.name} - TonyHe</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗂️</text></svg>"
        ></link>
      </Head>
      <Content>
        <div className="xl:mt-20 mt-0 xl:pt-0 pt-24">
          <div className="mb-4 xl:flex items-center">
            <div className="flex-1 items-center">
              <h1 className="font-medium text-1 text-black tracking-wide flex justify-center xl:justify-start">
                <span className="hover:animate-spin inline-block cursor-pointer mr-3">
                  🗂️
                </span>
                {info.name}
              </h1>
            </div>
            <div className="h-full flex xl:justify-end justify-center whitespace-nowrap items-center mt-2">
              <div className="border-r border-r-gray-200 xl:text-center xl:flex-1 px-5">
                <p className="text-xl text-gray-500 flex items-center">
                  <span className="w-6 h-6 mr-2">{Icons.count}</span>
                  {info.count} posts
                </p>
              </div>
              <div className="xl:flex-1 px-5">
                <p className="text-xl text-gray-500">
                  <Link href="/">
                    <a className="flex items-center">
                      <span className="w-6 h-6 mr-2">{Icons.left}</span>Home
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <SubscriptionBox type="sm"></SubscriptionBox>
        </div>
        <div className="xl:mt-5 mt-10">
          {!stickyNotFound && <List posts={stickyPosts} sticky={true}></List>}
        </div>
        <div className="mt-5" data-cy="catePosts">
          <List type="cate" cate={info.id}></List>
        </div>
      </Content>
    </div>
  )
}

// Get sticky posts rendered on the server side
export const getServerSideProps: GetServerSideProps = async (context) => {
  const cid = context.params.cid
  const resSticky = await fetch(
    getApi({
      sticky: true,
      perPage: 10,
      cate: `${cid}`,
    })
  )
  const dataSticky = await resSticky.json()
  let stickyNotFound = false
  if (!dataSticky) {
    stickyNotFound = true
  }

  const resInfo = await fetch(
    getApi({
      cate: `${cid}`,
      getCate: true,
    })
  )
  const infoData = await resInfo.json()

  return {
    props: {
      stickyNotFound: stickyNotFound,
      stickyPosts: dataSticky,
      info: {
        name: infoData.name,
        count: infoData.count,
        id: infoData.id,
      },
    },
  }
}