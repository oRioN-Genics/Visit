   M S B A M L   `   `   `  ����@  <Visit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullclr-namespace:VisitVisit  5   	       Visit.SignIn_Window   5   	   W SPresentationCore, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35^ ZWindowsFormsIntegration, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35H 9http://schemas.microsoft.com/winfx/2006/xaml/presentation      5   	   R NSystem.Xaml, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   %localclr-namespace:Visit     5   	     � Title$  SignIn_Window��5   	   $	��480��6   $	��800��6,    � WindowStartupLocation$ CenterScreen=�5	   	   .��5
      � 
������� � ColumnDefinitions 5   
   �� 5      $��* �6   �� 5      $��* �6   .+�5   
   � 
���   �$��0��6"   .+�5      �� $��Center=�6   $��Center=�64   .+�5      �� $��VISIT��6   
�������$��40(�5      $
��Bold"�5      $��0,0,0,20q�5       �� TextAlignment$ Center=�5      �� 5      $����Explore the world effortlessly. Discover top destinations, find the perfect stays, and plan your dream trip in just a few clicks.��6   
�������$��12(�5      $ Center=�6*   $
��Wrap=�5      5      5       � 5#   
   
�������$��1��6"   .+�5$      �� $��Center=�6   $��Center=�64   $	��300��6Q   .+�5%      �� $��Welcome Admin!��6   $��25(�5&      $
��Bold"�6*   $��0,0,0,10q�5'      $ Center=�6.   �� 5)      $��Login to your account��6   $��15(�5*      $
��Bold"�6*   $��0,0,0,10q�5+      $ Center=�6.   �� 5.      $��0,20,0,0q�6   .+�50      �� $��Username��6    $��14(�51       $��0,0,0,5q�52       ���#33353       �� 55      -   5        $��UsernameTextBox��55      $��30��56      ���#ccc$��1q�58      $��5q�59      $��0,0,0,15q�5:      �� 5>      $��Password��6    $��14(�5?       $��0,0,0,5q�5@       ���#3335A       G� 5C      -   5        $��PasswordBox��5C   "   $��30��5D   "   ���#ccc$��1q�5F   "   $��5q�5G   "   $��0,0,0,5q�5H   "   �� 5L      -   5        $��SignInButton��5U      $��Login��5L      $��40��5M      ���#6986f1
�������$��16(�5P      $
��Bold"�6+   $��0q�5Q       � Cursor$
 Hand��5R      $��0,20,0,0q�5S      5U      5V      5W      5X      � 5Y   
   -   5        $��LoadingProgressBar��5Y      $��Center=�5Z      $��Center=�5[      $	��200��5\      $��10��5]       � IsIndeterminate$
 True��5^      $y�	Collapsed=�5_      5`      5a      