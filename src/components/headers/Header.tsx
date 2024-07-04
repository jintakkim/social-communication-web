import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from "@nextui-org/navbar";
import { Image, Input } from "@nextui-org/react";
import Link from "next/link";


export default function Header() {
    return <Navbar className="border-2 border-grey-400 bg-grey-200 rounded-lg">
        <NavbarBrand>
            {/* {로고 들어가는 자리} */}
            <Link href='/' className="text-xl font-bold">ZAP</Link>
        </NavbarBrand>
        <NavbarContent justify="start">
            <NavbarItem>
                <Link className="font-semibold" href='#'>전체 커뮤니티</Link>
            </NavbarItem>
            <NavbarItem>
                <Link className="font-semibold" href='#'>내 커뮤니티</Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="center">
            {/* 만일 로그인 되어있으면 로그아웃버튼, direct메세지 버튼, 프로필보이게하기 */}
            <NavbarItem>
                <div className="font-semibold">로그인</div>
            </NavbarItem>
            <NavbarItem>
                <div className="font-semibold">회원가입</div>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
                <Input className="border-2 border-black rounded-lg" type="searchKeyword" placeholder="커뮤니티 찾기" />
            </NavbarItem>
        </NavbarContent>
    </Navbar>
}
