#include <bits/stdc++.h>
using namespace std;
int main() 
{
	int t; cin>>t;
	while(t--)
	{
		int n,k; cin>>n>>k; long int a[n],min=0,max=0,c=0;
		for(int i=0;i<n;i++) cin>>a[i];
			sort(a,a+n);
		int x=(n/(k+1)); if((n%(k+1))>0) {x++;}
		
		for(int i=0;i<x;i++) {min+=a[i];}
			for(int i=n-1;c<x;i--) {max+=a[i];c++;}
				cout<<min<<" "<<max<<endl;
		}
		return 0;
	}