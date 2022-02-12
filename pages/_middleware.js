import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/techfest-volunteers') {
        return NextResponse.redirect('https://docs.google.com/forms/d/e/1FAIpQLSdqHwGY60GvX4Dy98Wp9uJD67YAQgnlm8G0u8B08j_gjXdi4g/viewform?usp=sf_link')
    }
    return NextResponse.next()
}