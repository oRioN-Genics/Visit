   M S B A M L   `   `   `  ����@  <Visit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullclr-namespace:VisitVisit  5   	       Visit.ShowDetails_Window   5   	   W SPresentationCore, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35^ ZWindowsFormsIntegration, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35H 9http://schemas.microsoft.com/winfx/2006/xaml/presentation      5   	   R NSystem.Xaml, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   %localclr-namespace:Visit     5   	     � Title$  Users with Travel Plans��5   	   $	��600��6)   $	��900��66    � WindowStartupLocation$ CenterScreen=�5	   	   .��5
      � .+�5   
   &   System.Windows.Controls.DataGrid  -   5          Name$ UsersDataGrid��5         AutoGenerateColumns$ False��5      $��Stretch=�5      $��Stretch=�5         
IsReadOnly$
 True��5      $��10q�5      ��5      �� 5       �� ImageSource$* $E:\Visit\Desktop_App\Assets\logo.png��6    j� 
AlignmentX$ Center=�5   J    j� 
AlignmentY$ Center=�5   J    �� Opacity$	 0.5Q�5   A   	 j� Viewport	 5      � 5      
 � X$
 0Q�6    � Y$ 0Q�6%    � Width$ 1Q�6+    � Height$ 1Q�65    j� TileMode$
 None=�5   D   5         RowHeaderTemplate 5      �� 5       .R�5!      �� ��6    ��  �� RelativeSource ��  �� AncestorType DataGridRow �� Path$ GetIndex�5"         Columns 5%      0  *System.Windows.Controls.DataGridTextColumn  5&      ,  &System.Windows.Controls.DataGridColumn   Header$ #��6%      Width5  /System.Windows.Controls.DataGridLengthConverter$ 40 5(   %   1  +System.Windows.Controls.DataGridBoundColumn   Binding 5'   %   �� *Index+5(   %     5)      $ Access Status��6%   $
 auto 5+   %    5*   %   �� *access_status+   ElementStyle 5,      �� 5-       �� 
TargetType" ��6    .�5.      ��  �� Property � �� �� Value$ Center=�6D   �� 5/       � ��$ Center=�6B    �� Triggers 50      �� 52   "    �� Binding 6.   �� *access_status+ �� Value
 Banned6P   .a�53   &   ��  � ��
 �  ��6C   �� 54   &    �@J�Effect 55   *   3  -System.Windows.Media.Effects.DropShadowEffect  56   .      Color$ Black��6?      	Direction$	 320Q�57   ?       ShadowDepth$  1Q�58   ?   !   
BlurRadius$! 2Q�59   ?   5;   '   5<   #   �� 5>   "    6.   �� *access_status+
 Active6P   .a�5?   &   ��  � �� �#39FF146C   �� 5@   &    �@J�Effect 5A   *     5B   .   $ Black��6?   $	 320Q�5C   ?   $  1Q�5D   ?   $! 2Q�5E   ?   5G   '   5H   #   5J      5L        5M      $ Username��6%   $ * 5O   %    5N   %   �� *
Username+5O   %     5P      $ Email��6%   $ * 5R   %    5Q   %   �� *Email+5R   %     5S      $ Location��6%   $ * 5U   %    5T   %   �� *
Location+5U   %     5V      $ Duration��6%   $
 auto 5X   %    5W   %   �� *
Duration+5X   %     5Y      $ Budget��6%   $
 auto 5[   %    5Z   %   �� *Budget+5[   %     5\      $ Traveling With��6%   $
 auto 5^   %    5]   %   �� *TravelingWith+5^   %     5_      $ 	Travel Id��6%   $
 auto 5a   %    5`   %   �� *
TravelId+5a   %   5c      �� 5f   
   " �� Orientation$" 
Horizontal=�5g      $��Right=�5h      $��0,508,10,10q�5i      .+�5j      �� -   5        $��Change Access��5j      $	��100��5k      $��30��5l      $��0,0,10,0q�5m      ���#FF5722
�������5p      �� 5r      -   5        $��Delete Trip Plan��5r      $	��100��5s      $��30��5t      $��0,0,10,0q�5u      ���#D32F2F
�������5x      5y      5z      5{      