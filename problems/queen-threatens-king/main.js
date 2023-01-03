function threatens()
{
let
Kx = Kx  /* x coordinate of king's position */
,Ky = Ky /* y coordinate of king's position */
,Qx = Qx /* x coordinate of queen's position */
,Qy = Qy; /* x coordinate of king's position */

/*both pieces on the same diagonal if result is zero*/
Let dia = ((Kx-Qx)*(Kx-Qx))-((Ky-Qy)*(Ky-Qy));

/*check if the both pieces are on the same axes or diagonal*/
if((Kx==Qx)||(Ky==Qy)||(dia==0))
/*King is threatened*/
{
let threatened = true;

return threatened;
}

else
/*King not threatened*/
{
let threatened = false;

return threatened;
}

}
