﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Itog12
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Затр время.
    /// </summary>
    // *** Start programmer edit section *** (ЗатрВремя CustomAttributes)

    // *** End programmer edit section *** (ЗатрВремя CustomAttributes)
    [AutoAltered()]
    [Caption("ЗатраченноеВремя")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗатрВремяE", new string[] {
            "ЗатрВремя as \'Время\'"})]
    [View("ЗатрВремяL", new string[] {
            "ЗатрВремя as \'Время\'"})]
    public class ЗатрВремя : ICSSoft.STORMNET.DataObject
    {
        
        private int fЗатрВремя;
        
        // *** Start programmer edit section *** (ЗатрВремя CustomMembers)

        // *** End programmer edit section *** (ЗатрВремя CustomMembers)

        
        /// <summary>
        /// ЗатрВремя.
        /// </summary>
        // *** Start programmer edit section *** (ЗатрВремя.ЗатрВремя CustomAttributes)

        // *** End programmer edit section *** (ЗатрВремя.ЗатрВремя CustomAttributes)
        public virtual int ЗатрВремя
        {
            get
            {
                // *** Start programmer edit section *** (ЗатрВремя.ЗатрВремя Get start)

                // *** End programmer edit section *** (ЗатрВремя.ЗатрВремя Get start)
                int result = this.fЗатрВремя;
                // *** Start programmer edit section *** (ЗатрВремя.ЗатрВремя Get end)

                // *** End programmer edit section *** (ЗатрВремя.ЗатрВремя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗатрВремя.ЗатрВремя Set start)

                // *** End programmer edit section *** (ЗатрВремя.ЗатрВремя Set start)
                this.fЗатрВремя = value;
                // *** Start programmer edit section *** (ЗатрВремя.ЗатрВремя Set end)

                // *** End programmer edit section *** (ЗатрВремя.ЗатрВремя Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗатрВремяE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗатрВремяE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗатрВремяE", typeof(IIS.Itog12.ЗатрВремя));
                }
            }
            
            /// <summary>
            /// "ЗатрВремяL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗатрВремяL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗатрВремяL", typeof(IIS.Itog12.ЗатрВремя));
                }
            }
        }
    }
}
