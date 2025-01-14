using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Visit
{
    /// <summary>
    /// Interaction logic for SignIn_Window.xaml
    /// </summary>
    public partial class SignIn_Window : Window
    {
        public SignIn_Window()
        {
            InitializeComponent();
        }

        private void SignUp_Click(object sender, RoutedEventArgs e)
        {
            SignUp_Window signUpWindow = new SignUp_Window();
            signUpWindow.Show();

            this.Close();
        }
    }
}
