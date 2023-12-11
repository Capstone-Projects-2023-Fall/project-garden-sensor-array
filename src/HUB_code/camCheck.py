from subprocess import call, check_output

#call(['libcamera-hello', '--list-cameras'])
def exists():
    try:
        var = check_output('libcamera-hello --list-cameras | grep SRGGB', shell=True).decode('utf-8')
        print(f"This that shit: {var}")

        return True
    except:
        print("Shit ain't there")
        
        return False

#print(var)