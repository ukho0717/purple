import React,{useState} from 'react';
import { withRouter } from "react-router-dom";

const UserTable = ({list}) => {
    return(
        <>
            <tr>
                <td>{list.user_nick}</td>
                <td>{list.user_email}</td>
                <td>{(list.regdate).substring(0,10)}</td>
            </tr>
        </>
    )
}

const AdminUser = ({ userList, onChange, onClick, handleChange, selectVal, input, nick, email, gender}) => {

    return(
        <>
            <select onChange = {handleChange}>
                <option value="nick">닉네임</option>
                <option value="email">이메일</option>
                <option value="gender">성별</option>
            </select>
            <input type="text" onChange={(e)=>onChange(e)} value={input}/>
            <button onClick={()=> onClick(selectVal, input)}>검색</button>
            {nick === null && email === null && gender === null && (
                <table>
                <tr>
                    <th>닉네임</th>
                    <th>이메일</th>
                    <th>로그인날짜</th>
                </tr>
                {userList.map(user=>(
                    <UserTable list={user} />
                ))}
                </table>
            )}
            {nick !== null && (
                <table>
                <tr>
                    <th>닉네임</th>
                    <th>이메일</th>
                    <th>로그인날짜</th>
                </tr>
                {nick.map(user=>(
                    <UserTable list={user} />
                ))}
                </table>
            )}
            {email !== null && (
                <table>
                <tr>
                    <th>닉네임</th>
                    <th>이메일</th>
                    <th>로그인날짜</th>
                </tr>
                {nick.map(user=>(
                    <UserTable list={user} />
                ))}
                </table>
            )}
            {gender !== null && (
                <table>
                <tr>
                    <th>닉네임</th>
                    <th>이메일</th>
                    <th>로그인날짜</th>
                </tr>
                {nick.map(user=>(
                    <UserTable list={user} />
                ))}
                </table>
            )}
        </>
    )
}

export default withRouter(AdminUser);