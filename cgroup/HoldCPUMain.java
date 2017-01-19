public class HoldCPUMain{
    public static class HoldCPUTask implements Runnable{
	@Override
	public void run(){
	    while(true){
		double a=Math.random()*Math.random();//use cpu
		System.out.println(a);
	    }
	}
    }
    
    public static class LazyTask implements Runnable{
	public void run(){
	while(true){
	    try{
		Thread.sleep(1000);
	    }catch(InterruptedException e){
		e.printStackTrace();
	    }
	}
    }
	}
    
    
    public static void main(String[] arg){
	for(int i=0;i<10;i++){
	    new Thread(new HoldCPUTask()).start();
	}
    }
}

